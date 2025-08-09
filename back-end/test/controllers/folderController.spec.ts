import { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';
import logger from '../../src/utils/logger';

// Mock the entire Prisma client module
const mockPrisma = {
    folder: {
        create: sinon.stub(),
        findMany: sinon.stub(),
        findFirst: sinon.stub(),
        update: sinon.stub(),
        delete: sinon.stub()
    },
    note: {
        deleteMany: sinon.stub()
    }
};

// Mock the PrismaClient constructor
sinon.stub(require('../../generated/prisma'), 'PrismaClient').returns(mockPrisma);

// Now import the controllers (after mocking)
import {  getFolders, updateFolder, deleteFolder } from '../../src/controllers/folderController';

describe('Folder Controller', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let statusStub: sinon.SinonStub;
    let jsonStub: sinon.SinonStub;
    let loggerInfoStub: sinon.SinonStub;
    let loggerWarnStub: sinon.SinonStub;
    let loggerErrorStub: sinon.SinonStub;

    beforeEach(() => {
        jsonStub = sinon.stub();
        statusStub = sinon.stub().returns({ json: jsonStub });

        req = { body: {}, params: {} };
        res = { 
            status: statusStub,
            json: jsonStub 
        } as unknown as Response;

        // Mock logger methods
        loggerInfoStub = sinon.stub(logger, 'info');
        loggerWarnStub = sinon.stub(logger, 'warn');
        loggerErrorStub = sinon.stub(logger, 'error');

        // Reset all mocks
        mockPrisma.folder.create.reset();
        mockPrisma.folder.findMany.reset();
        mockPrisma.folder.findFirst.reset();
        mockPrisma.folder.update.reset();
        mockPrisma.folder.delete.reset();
        mockPrisma.note.deleteMany.reset();
    });

    afterEach(() => {
        sinon.restore();
    });

    // ... existing createFolder tests ...

    describe('getFolders Controller', () => {
        
        it('should get a specific folder by ID and user ID', async () => {
            // Arrange
            req.body = { id: '1', uid: '123' };
            
            const mockFolder = {
                id: 1,
                name: 'Test Folder',
                user_id: 123,
                domain: 'work',
                created_at: new Date(),
                updated_at: new Date()
            };

            mockPrisma.folder.findFirst.resolves(mockFolder);

            // Act
            await getFolders(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.findFirst.calledOnce).to.be.true;
            expect(mockPrisma.folder.findFirst.calledWith({
                where: { id: 1, user_id: 123 }
            })).to.be.true;
            expect(jsonStub.calledWith(mockFolder)).to.be.true;
            expect(loggerInfoStub.callCount).to.equal(3); // attempt, single_folder, success
        });

        it('should return 404 when specific folder is not found', async () => {
            // Arrange
            req.body = { id: '999', uid: '123' };
            mockPrisma.folder.findFirst.resolves(null);

            // Act
            await getFolders(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.findFirst.calledOnce).to.be.true;
            expect(statusStub.calledWith(404)).to.be.true;
            expect(jsonStub.calledWith({ message: "Folder not found" })).to.be.true;
            expect(loggerWarnStub.calledOnce).to.be.true;
        });

        it('should get all folders for a user when only uid is provided', async () => {
            // Arrange
            req.body = { uid: '123' };
            
            const mockFolders = [
                {
                    id: 1,
                    name: 'Folder 1',
                    user_id: 123,
                    domain: 'work',
                    created_at: new Date(),
                    updated_at: new Date()
                },
                {
                    id: 2,
                    name: 'Folder 2',
                    user_id: 123,
                    domain: 'personal',
                    created_at: new Date(),
                    updated_at: new Date()
                }
            ];

            mockPrisma.folder.findMany.resolves(mockFolders);

            // Act
            await getFolders(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.findMany.calledOnce).to.be.true;
            expect(mockPrisma.folder.findMany.calledWith({
                where: { user_id: 123 }
            })).to.be.true;
            expect(jsonStub.calledWith(mockFolders)).to.be.true;
            expect(loggerInfoStub.callCount).to.equal(3); // attempt, get_all_folders, success
        });

        it('should return empty array when user has no folders', async () => {
            // Arrange
            req.body = { uid: '123' };
            mockPrisma.folder.findMany.resolves([]);

            // Act
            await getFolders(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.findMany.calledOnce).to.be.true;
            expect(jsonStub.calledWith([])).to.be.true;
            expect(loggerInfoStub.callCount).to.equal(3);
        });

        it('should return 500 when invalid parameters are provided', async () => {
            // Arrange
            req.body = {}; // No id or uid

            // Act
            await getFolders(req as Request, res as Response);

            // Assert
            expect(statusStub.calledWith(500)).to.be.true;
            expect(jsonStub.calledWith({ message: "Internal server error" })).to.be.true;
            expect(loggerWarnStub.calledOnce).to.be.true;
            expect(loggerErrorStub.calledOnce).to.be.true;
        });

        it('should handle database error', async () => {
            // Arrange
            req.body = { uid: '123' };
            const dbError = new Error('Database connection failed');
            mockPrisma.folder.findMany.rejects(dbError);

            // Act
            await getFolders(req as Request, res as Response);

            // Assert
            expect(statusStub.calledWith(500)).to.be.true;
            expect(jsonStub.calledWith({ message: "Internal server error" })).to.be.true;
            expect(loggerErrorStub.calledOnce).to.be.true;
        });

        it('should convert string IDs to numbers', async () => {
            // Arrange
            req.body = { id: '42', uid: '456' };
            const mockFolder = {
                id: 42,
                name: 'Test Folder',
                user_id: 456,
                domain: 'work'
            };
            mockPrisma.folder.findFirst.resolves(mockFolder);

            // Act
            await getFolders(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.findFirst.calledWith({
                where: { id: 42, user_id: 456 }
            })).to.be.true;
        });
    });

    describe('updateFolder Controller', () => {
        
        it('should update folder domain successfully', async () => {
            // Arrange
            req.params = { id: '1' };
            req.body = { domain: 'personal' };
            
            const updatedFolder = {
                id: 1,
                name: 'Test Folder',
                user_id: 123,
                domain: 'personal',
                created_at: new Date(),
                updated_at: new Date()
            };

            mockPrisma.folder.update.resolves(updatedFolder);

            // Act
            await updateFolder(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.update.calledOnce).to.be.true;
            expect(mockPrisma.folder.update.calledWith({
                where: { id: 1 },
                data: { domain: 'personal' }
            })).to.be.true;
            expect(jsonStub.calledWith(updatedFolder)).to.be.true;
            expect(loggerInfoStub.callCount).to.equal(2); // attempt, success
        });

        it('should handle empty update data', async () => {
            // Arrange
            req.params = { id: '1' };
            req.body = {}; // No domain provided
            
            const updatedFolder = {
                id: 1,
                name: 'Test Folder',
                user_id: 123,
                domain: 'work',
                created_at: new Date(),
                updated_at: new Date()
            };

            mockPrisma.folder.update.resolves(updatedFolder);

            // Act
            await updateFolder(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.update.calledOnce).to.be.true;
            expect(mockPrisma.folder.update.calledWith({
                where: { id: 1 },
                data: {}
            })).to.be.true;
            expect(jsonStub.calledWith(updatedFolder)).to.be.true;
        });

        it('should return 404 when folder not found for update', async () => {
            // Arrange
            req.params = { id: '999' };
            req.body = { domain: 'personal' };
            
            const prismaError = { code: 'P2025', message: 'Record not found' };
            mockPrisma.folder.update.rejects(prismaError);

            // Act
            await updateFolder(req as Request, res as Response);

            // Assert
            expect(statusStub.calledWith(404)).to.be.true;
            expect(jsonStub.calledWith({ message: "Folder not found" })).to.be.true;
            expect(loggerWarnStub.calledOnce).to.be.true;
            expect(loggerErrorStub.calledOnce).to.be.true;
        });

        it('should handle other database errors', async () => {
            // Arrange
            req.params = { id: '1' };
            req.body = { domain: 'personal' };
            
            const dbError = new Error('Database connection failed');
            mockPrisma.folder.update.rejects(dbError);

            // Act
            await updateFolder(req as Request, res as Response);

            // Assert
            expect(statusStub.calledWith(500)).to.be.true;
            expect(jsonStub.calledWith({ message: "Internal server error" })).to.be.true;
            expect(loggerErrorStub.calledOnce).to.be.true;
        });

        it('should convert string ID to number', async () => {
            // Arrange
            req.params = { id: '42' };
            req.body = { domain: 'personal' };
            
            const updatedFolder = { id: 42, domain: 'personal' };
            mockPrisma.folder.update.resolves(updatedFolder);

            // Act
            await updateFolder(req as Request, res as Response);

            // Assert
            expect(mockPrisma.folder.update.calledWith({
                where: { id: 42 },
                data: { domain: 'personal' }
            })).to.be.true;
        });
    });

    describe('deleteFolder Controller', () => {
        
        it('should delete folder and associated notes successfully', async () => {
            // Arrange
            req.params = { id: '1' };
            
            const deletedNotesResult = { count: 3 };
            mockPrisma.note.deleteMany.resolves(deletedNotesResult);
            mockPrisma.folder.delete.resolves({ id: 1 });

            // Act
            await deleteFolder(req as Request, res as Response);

            // Assert
            expect(mockPrisma.note.deleteMany.calledOnce).to.be.true;
            expect(mockPrisma.note.deleteMany.calledWith({
                where: { folder_id: 1 }
            })).to.be.true;
            
            expect(mockPrisma.folder.delete.calledOnce).to.be.true;
            expect(mockPrisma.folder.delete.calledWith({
                where: { id: 1 }
            })).to.be.true;
            
            expect(jsonStub.calledWith({ message: "Folder deleted successfully" })).to.be.true;
            expect(loggerInfoStub.callCount).to.equal(3); // attempt, notes deleted, success
        });

        it('should delete folder even when no associated notes exist', async () => {
            // Arrange
            req.params = { id: '1' };
            
            const deletedNotesResult = { count: 0 };
            mockPrisma.note.deleteMany.resolves(deletedNotesResult);
            mockPrisma.folder.delete.resolves({ id: 1 });

            // Act
            await deleteFolder(req as Request, res as Response);

            // Assert
            expect(mockPrisma.note.deleteMany.calledOnce).to.be.true;
            expect(mockPrisma.folder.delete.calledOnce).to.be.true;
            expect(jsonStub.calledWith({ message: "Folder deleted successfully" })).to.be.true;
        });

        it('should return 404 when folder not found for deletion', async () => {
            // Arrange
            req.params = { id: '999' };
            
            const deletedNotesResult = { count: 0 };
            mockPrisma.note.deleteMany.resolves(deletedNotesResult);
            
            const prismaError = { code: 'P2025', message: 'Record not found' };
            mockPrisma.folder.delete.rejects(prismaError);

            // Act
            await deleteFolder(req as Request, res as Response);

            // Assert
            expect(statusStub.calledWith(404)).to.be.true;
            expect(jsonStub.calledWith({ message: "Folder not found" })).to.be.true;
            expect(loggerWarnStub.calledOnce).to.be.true;
            expect(loggerErrorStub.calledOnce).to.be.true;
        });

        it('should handle database error during note deletion', async () => {
            // Arrange
            req.params = { id: '1' };
            
            const dbError = new Error('Database connection failed');
            mockPrisma.note.deleteMany.rejects(dbError);

            // Act
            await deleteFolder(req as Request, res as Response);

            // Assert
            expect(statusStub.calledWith(500)).to.be.true;
            expect(jsonStub.calledWith({ message: "Internal server error" })).to.be.true;
            expect(loggerErrorStub.calledOnce).to.be.true;
        });

        it('should handle database error during folder deletion', async () => {
            // Arrange
            req.params = { id: '1' };
            
            const deletedNotesResult = { count: 2 };
            mockPrisma.note.deleteMany.resolves(deletedNotesResult);
            
            const dbError = new Error('Foreign key constraint failed');
            mockPrisma.folder.delete.rejects(dbError);

            // Act
            await deleteFolder(req as Request, res as Response);

            // Assert
            expect(statusStub.calledWith(500)).to.be.true;
            expect(jsonStub.calledWith({ message: "Internal server error" })).to.be.true;
            expect(loggerErrorStub.calledOnce).to.be.true;
        });

        it('should convert string ID to number', async () => {
            // Arrange
            req.params = { id: '42' };
            
            const deletedNotesResult = { count: 1 };
            mockPrisma.note.deleteMany.resolves(deletedNotesResult);
            mockPrisma.folder.delete.resolves({ id: 42 });

            // Act
            await deleteFolder(req as Request, res as Response);

            // Assert
            expect(mockPrisma.note.deleteMany.calledWith({
                where: { folder_id: 42 }
            })).to.be.true;
            expect(mockPrisma.folder.delete.calledWith({
                where: { id: 42 }
            })).to.be.true;
        });

        it('should handle large number of associated notes', async () => {
            // Arrange
            req.params = { id: '1' };
            
            const deletedNotesResult = { count: 150 };
            mockPrisma.note.deleteMany.resolves(deletedNotesResult);
            mockPrisma.folder.delete.resolves({ id: 1 });

            // Act
            await deleteFolder(req as Request, res as Response);

            // Assert
            expect(mockPrisma.note.deleteMany.calledOnce).to.be.true;
            expect(mockPrisma.folder.delete.calledOnce).to.be.true;
            expect(jsonStub.calledWith({ message: "Folder deleted successfully" })).to.be.true;
            
            // Verify logging includes the count
            expect(loggerInfoStub.calledWith(sinon.match({
                folderId: '1',
                deletedNotesCount: 150,
                action: 'delete_folder_notes'
            }))).to.be.true;
        });
    });
});