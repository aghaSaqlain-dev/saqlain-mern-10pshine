const mockPost = jest.fn();
jest.mock('axios', () => ({
  post: mockPost,
}));

jest.mock('../Helpers/ErrorHandler', () => ({
  handleError: jest.fn(),
}));

jest.mock('../variables/APIS', () => ({
  API_LOGIN: '/api/auth/login',
  API_REGISTER: '/api/auth/register',
  API_VERIFY_OTP: '/api/auth/verify-otp'
}));

import { loginAPI, registerAPI, verifyOTPAPI } from './AuthServices';
import { handleError } from '../Helpers/ErrorHandler';

const mockedHandleError = handleError as jest.MockedFunction<typeof handleError>;

describe('AuthServices', () => {
  beforeEach(() => {
    mockPost.mockClear();
    mockedHandleError.mockClear();
  });

  describe('loginAPI', () => {
    it('should successfully login with valid credentials', async () => {
      const mockResponse = {
        data: { token: 'mock-token', user: { id: 1, name: 'test', email: 'test@test.com' } },
        status: 200
      };
      
      mockPost.mockResolvedValue(mockResponse);

      const result = await loginAPI('test@test.com', 'password');

      expect(mockPost).toHaveBeenCalledWith('/api/auth/login', {
        email: 'test@test.com',
        password: 'password'
      });
      expect(result).toEqual(mockResponse);
      expect(mockedHandleError).not.toHaveBeenCalled();
    });

    it('should handle login error', async () => {
      const mockError = new Error('Login failed');
      mockPost.mockRejectedValue(mockError);

      const result = await loginAPI('test@test.com', 'wrongpassword');

      expect(mockPost).toHaveBeenCalledWith('/api/auth/login', {
        email: 'test@test.com',
        password: 'wrongpassword'
      });
      expect(mockedHandleError).toHaveBeenCalledWith(mockError);
      expect(result).toBeUndefined();
    });
  });

  describe('registerAPI', () => {
    it('should successfully register with valid data', async () => {
      const mockResponse = {
        data: { token: 'mock-token', user: { id: 1, name: 'newuser', email: 'new@test.com' } },
        status: 201
      };
      
      mockPost.mockResolvedValue(mockResponse);

      const result = await registerAPI('new@test.com', 'newuser', 'password123');

      expect(mockPost).toHaveBeenCalledWith('/api/auth/register', {
        email: 'new@test.com',
        username: 'newuser',
        password: 'password123'
      });
      expect(result).toEqual(mockResponse);
      expect(mockedHandleError).not.toHaveBeenCalled();
    });

    it('should handle registration error', async () => {
      const mockError = new Error('User already exists');
      mockPost.mockRejectedValue(mockError);

      const result = await registerAPI('existing@test.com', 'existinguser', 'password123');

      expect(mockPost).toHaveBeenCalledWith('/api/auth/register', {
        email: 'existing@test.com',
        username: 'existinguser',
        password: 'password123'
      });
      expect(mockedHandleError).toHaveBeenCalledWith(mockError);
      expect(result).toBeUndefined();
    });
  });

  describe('verifyOTPAPI', () => {
    it('should successfully verify OTP with valid data', async () => {
      const mockResponse = {
        data: { token: 'mock-token', user: { id: 1, name: 'verifieduser', email: 'verified@test.com' } },
        status: 200
      };
      
      mockPost.mockResolvedValue(mockResponse);

      const result = await verifyOTPAPI('verified@test.com', '123456');

      expect(mockPost).toHaveBeenCalledWith('/api/auth/verify-otp', {
        email: 'verified@test.com',
        otp: '123456'
      });
      expect(result).toEqual(mockResponse);
      expect(mockedHandleError).not.toHaveBeenCalled();
    });

    it('should handle invalid OTP error', async () => {
      const mockError = new Error('Invalid OTP');
      mockPost.mockRejectedValue(mockError);

      const result = await verifyOTPAPI('test@test.com', '000000');

      expect(mockPost).toHaveBeenCalledWith('/api/auth/verify-otp', {
        email: 'test@test.com',
        otp: '000000'
      });
      expect(mockedHandleError).toHaveBeenCalledWith(mockError);
      expect(result).toBeUndefined();
    });
  });
});