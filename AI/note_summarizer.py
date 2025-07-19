import os
import time
import json
from flask import Flask, request, jsonify
from flask_cors import CORS

from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain.prompts import ChatPromptTemplate, PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_ollama import ChatOllama, OllamaEmbeddings
from langchain_core.runnables import RunnablePassthrough
from langchain.retrievers.multi_query import MultiQueryRetriever
from langchain.schema import Document

import ollama

app = Flask(__name__)
CORS(app) 

vector_db = None
chain = None
current_note_content = None
model_name = "llama3.2:3b"

def extract_text_from_tiptap_json(tiptap_json):
    """Extract plain text from TipTap JSON format"""
    def extract_text_recursive(node):
        text = ""
        
        # If node has text content
        if isinstance(node, dict) and 'text' in node:
            text += node['text']
        
        # If node has content (children)
        if isinstance(node, dict) and 'content' in node:
            for child in node['content']:
                text += extract_text_recursive(child)
        
        # Add spacing for block elements
        if isinstance(node, dict) and node.get('type') in ['paragraph', 'heading', 'listItem']:
            text += "\n"
            
        return text
    
    try:
        if isinstance(tiptap_json, str):
            tiptap_data = json.loads(tiptap_json)
        else:
            tiptap_data = tiptap_json
        
        extracted_text = extract_text_recursive(tiptap_data)
        return extracted_text.strip()
    
    except Exception as e:
        raise Exception(f"Error extracting text from TipTap JSON: {str(e)}")

def setup_notes_pipeline(note_content):
    """Initialize or reset the RAG pipeline with the specified note content"""
    global vector_db, chain, current_note_content
    
    print("Setting up notes pipeline...")
    
    # Extract text from TipTap JSON
    if isinstance(note_content, (dict, str)):
        text_content = extract_text_from_tiptap_json(note_content)
    else:
        text_content = str(note_content)
    
    current_note_content = text_content
    
    # Create a document object
    document = Document(page_content=text_content, metadata={"source": "user_note"})
    
    # Split into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=800,  # Smaller chunks for notes
        chunk_overlap=200
    )
    chunks = text_splitter.split_documents([document])
    print(f"Note split into {len(chunks)} chunks")
    
    # Create vector database
    ollama.pull("nomic-embed-text")
    vector_db = Chroma.from_documents(
        documents=chunks,
        embedding=OllamaEmbeddings(model="nomic-embed-text"),
        collection_name="notes-rag",
    )
    
    # Set up LLM and retrieval chain
    llm = ChatOllama(model=model_name)
    
    QUERY_PROMPT = PromptTemplate(
        input_variables=["question"],
        template="""You are an intelligent note assistant that helps users understand and work with their notes.
        Your role is to help users by:
        - Answering questions about their note content
        - Providing clear summaries and explanations
        - Highlighting key points and concepts
        - Making connections between different parts of the notes
        
        Always be helpful, accurate, and reference the specific content from the notes.
        If the notes don't contain relevant information, say so clearly.
        \n\nQuestion: {question}""",
    )
    
    retriever = MultiQueryRetriever.from_llm(
        vector_db.as_retriever(search_kwargs={"k": 3}),  # Get top 3 relevant chunks
        llm,
        prompt=QUERY_PROMPT
    )
    
    template = """Answer the question based ONLY on the following note content:
    {context}
    
    Question: {question}
    
    If the note content doesn't contain information to answer the question, say "I don't see information about that in your notes."
    """
    
    prompt = ChatPromptTemplate.from_template(template)
    
    chain = (
        {"context": retriever, "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )
    
    return len(chunks)

@app.route('/api/summarize', methods=['POST'])
def summarize_notes():
    """Summarize the provided notes"""
    try:
        data = request.get_json(force=True)
        
        if not data:
            return jsonify({"error": "Invalid JSON"}), 400
        
        note_content = data.get('note_content')
        summary_type = data.get('summary_type', 'general')  # general, bullet_points, key_concepts
        
        if not note_content:
            return jsonify({"error": "Note content is required"}), 400
        
        # Setup pipeline with note content
        try:
            num_chunks = setup_notes_pipeline(note_content)
            print(f"Notes pipeline initialized with {num_chunks} chunks")
        except Exception as e:
            return jsonify({"error": f"Failed to process note: {str(e)}"}), 500
        
        # Create summary query based on type
        summary_queries = {
            'general': "Provide a comprehensive summary of these notes in 2-3 paragraphs.",
            'bullet_points': "Create a bullet-point summary of the key points from these notes.",
            'key_concepts': "Identify and explain the main concepts and ideas in these notes.",
            'brief': "Provide a brief 1-paragraph summary of these notes."
        }
        
        query = summary_queries.get(summary_type, summary_queries['general'])
        
        # Generate summary
        start_time = time.time()
        summary = chain.invoke(input=(query,))
        processing_time = time.time() - start_time
        
        response = {
            "summary": summary,
            "summary_type": summary_type,
            "metadata": {
                "chunks_processed": num_chunks,
                "model": model_name,
                "processing_time": round(processing_time, 2)
            }
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/query', methods=['POST'])
def query_notes():
    """Ask questions about the notes"""
    try:
        data = request.get_json(force=True)
        
        if not data:
            return jsonify({"error": "Invalid JSON"}), 400
            
        query = data.get('query')
        note_content = data.get('note_content')
        
        if not query:
            return jsonify({"error": "Query is required"}), 400
        
        if not note_content:
            return jsonify({"error": "Note content is required"}), 400
        
        # Setup pipeline if note content has changed
        try:
            extracted_text = extract_text_from_tiptap_json(note_content)
            if extracted_text != current_note_content:
                num_chunks = setup_notes_pipeline(note_content)
                print(f"Notes pipeline updated with {num_chunks} chunks")
        except Exception as e:
            return jsonify({"error": f"Failed to process note: {str(e)}"}), 500
        
        # Query the notes
        start_time = time.time()
        answer = chain.invoke(input=(query,))
        processing_time = time.time() - start_time
        
        response = {
            "answer": answer,
            "query": query,
            "metadata": {
                "model": model_name,
                "processing_time": round(processing_time, 2)
            }
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/generate-questions', methods=['POST'])
def generate_questions():
    """Generate potential questions based on the note content"""
    try:
        data = request.get_json(force=True)
        
        if not data:
            return jsonify({"error": "Invalid JSON"}), 400
        
        note_content = data.get('note_content')
        num_questions = data.get('num_questions', 5)
        
        if not note_content:
            return jsonify({"error": "Note content is required"}), 400
        
        # Setup pipeline
        try:
            setup_notes_pipeline(note_content)
        except Exception as e:
            return jsonify({"error": f"Failed to process note: {str(e)}"}), 500
        
        # Generate questions
        query = f"Based on these notes, generate {num_questions} thoughtful questions that would help someone study or understand this content better. Format as a numbered list."
        
        start_time = time.time()
        questions = chain.invoke(input=(query,))
        processing_time = time.time() - start_time
        
        response = {
            "questions": questions,
            "metadata": {
                "model": model_name,
                "processing_time": round(processing_time, 2)
            }
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)