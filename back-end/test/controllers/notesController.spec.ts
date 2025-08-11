import chai, { expect } from 'chai';
import { Request, Response } from 'express';
import { 
  getAllNotes, 
  createNote, 
  updateNote, 
  deleteNote, 
  forceDeleteNote, 
  trashedNotes, 
  recoverNote 
} from '../../src/controllers/notesController';

describe('Notes Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let responseData: any;
  let statusCode: number;

  beforeEach(() => {
    responseData = null;
    statusCode = 200;
    
    req = {};
    res = {
      json: (data: any) => {
        responseData = data;
        return res as Response;
      },
      status: (code: number) => {
        statusCode = code;
        return res as Response;
      }
    };
  });

  describe('getAllNotes', () => {
    it('should return 400 for missing user_id', async () => {
      req.query = { folder_id: '1' };

      await getAllNotes(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID and folder ID are required');
    });

    it('should return 400 for missing folder_id', async () => {
      req.query = { user_id: '1' };

      await getAllNotes(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID and folder ID are required');
    });

    it('should return 400 for missing both parameters', async () => {
      req.query = {};

      await getAllNotes(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID and folder ID are required');
    });
  });

  describe('createNote', () => {
    it('should return 400 for missing user_id', async () => {
      req.body = { title: 'Test Note', content: 'Content', folder_id: 1 };

      await createNote(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID and folder ID are required');
    });

    it('should return 400 for missing folder_id', async () => {
      req.body = { title: 'Test Note', content: 'Content', user_id: 1 };

      await createNote(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID and folder ID are required');
    });
  });

  describe('updateNote', () => {
    it('should handle missing note id', async () => {
      req.params = {};
      req.body = { title: 'Updated Note' };

      await updateNote(req as Request, res as Response);

      // Should handle gracefully (will likely return 500 due to invalid ID)
      expect(statusCode).to.be.oneOf([400, 500]);
    });
  });

  describe('deleteNote', () => {
    it('should handle missing note id', async () => {
      req.params = {};

      await deleteNote(req as Request, res as Response);

      // Should handle gracefully (will likely return 500 due to invalid ID)
      expect(statusCode).to.be.oneOf([400, 500]);
    });
  });

  describe('forceDeleteNote', () => {
    it('should handle missing note id', async () => {
      req.params = {};

      await forceDeleteNote(req as Request, res as Response);

      // Should handle gracefully (will likely return 500 due to invalid ID)
      expect(statusCode).to.be.oneOf([400, 500]);
    });
  });

  describe('trashedNotes', () => {
    it('should return 400 for missing uid', async () => {
      req.body = {};

      await trashedNotes(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID is required');
    });

    it('should return 400 for null uid', async () => {
      req.body = { uid: null };

      await trashedNotes(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID is required');
    });

    it('should return 400 for undefined uid', async () => {
      req.body = { uid: undefined };

      await trashedNotes(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('User ID is required');
    });
  });

  describe('recoverNote', () => {
    it('should return 400 for missing note id', async () => {
      req.params = {};

      await recoverNote(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('Note ID is required');
    });

    it('should return 400 for null note id', async () => {
      req.params = { id: null as any };

      await recoverNote(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('Note ID is required');
    });

    it('should return 400 for undefined note id', async () => {
      req.params = { id: undefined as any };

      await recoverNote(req as Request, res as Response);

      expect(statusCode).to.equal(400);
      expect(responseData.message).to.equal('Note ID is required');
    });
  });

  describe('Response object behavior', () => {
    it('should have working json method', () => {
      const testData = { message: 'test' };
      res.json!(testData);
      expect(responseData).to.deep.equal(testData);
    });

    it('should have working status method', () => {
      res.status!(404);
      expect(statusCode).to.equal(404);
    });

    it('should chain status and json methods', () => {
      const testData = { error: 'not found' };
      res.status!(404).json!(testData);
      expect(statusCode).to.equal(404);
      expect(responseData).to.deep.equal(testData);
    });
  });
});