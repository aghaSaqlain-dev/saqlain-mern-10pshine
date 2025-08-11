const mockToastWarning = jest.fn();
jest.mock('react-toastify', () => ({
  toast: {
    warning: mockToastWarning,
  },
}));

jest.mock('axios', () => ({
  isAxiosError: jest.fn(),
}));

const mockPushState = jest.fn();
Object.defineProperty(window, 'history', {
  value: {
    pushState: mockPushState,
  },
  writable: true,
});

import axios from 'axios';
import { handleError } from './ErrorHandler';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ErrorHandler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('handleError', () => {
    it('should handle axios error with array of errors', () => {
      const mockError = {
        response: {
          data: {
            err: [
              { description: 'Error 1' },
              { description: 'Error 2' },
              { description: 'Error 3' }
            ]
          }
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(3);
      expect(mockToastWarning).toHaveBeenNthCalledWith(1, 'Error 1');
      expect(mockToastWarning).toHaveBeenNthCalledWith(2, 'Error 2');
      expect(mockToastWarning).toHaveBeenNthCalledWith(3, 'Error 3');
    });

    it('should handle axios error with object of errors', () => {
      const mockError = {
        response: {
          data: {
            errors: {
              email: 'Email is required',
              password: 'Password is too short',
              username: 'Username already exists'
            }
          }
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(3);
      expect(mockToastWarning).toHaveBeenCalledWith('Email is required');
      expect(mockToastWarning).toHaveBeenCalledWith('Password is too short');
      expect(mockToastWarning).toHaveBeenCalledWith('Username already exists');
    });

    it('should handle axios error with simple data message', () => {
      const mockError = {
        response: {
          data: 'Simple error message'
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith('Simple error message');
    });

    it('should handle 401 unauthorized error with null data', () => {
      const mockError = {
        response: {
          status: 401,
          data: null
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith('Unauthorized access. Please log in again.');
      expect(mockPushState).toHaveBeenCalledWith({}, 'LoginPage', '/login');
    });

    it('should handle 401 unauthorized error with data', () => {
      const mockError = {
        response: {
          status: 401,
          data: 'Some unauthorized message'
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith('Unauthorized access. Please log in again.');
      expect(mockPushState).toHaveBeenCalledWith({}, 'LoginPage', '/login');
    });

    it('should handle axios error with response but no specific data', () => {
      const mockError = {
        response: {
          status: 500,
          data: 'Server error'
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith('Server error');
    });

    it('should handle non-axios errors gracefully', () => {
      const mockError = new Error('Regular JavaScript error');

      mockedAxios.isAxiosError.mockReturnValue(false);

      handleError(mockError);

      expect(mockToastWarning).not.toHaveBeenCalled();
      expect(mockPushState).not.toHaveBeenCalled();
    });

    it('should handle axios error without response', () => {
      const mockError = {
        message: 'Network Error'
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).not.toHaveBeenCalled();
    });

    it('should handle axios error with empty array of errors', () => {
      const mockError = {
        response: {
          data: {
            err: []
          }
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).not.toHaveBeenCalled();
    });

    it('should handle axios error with empty errors object', () => {
      const mockError = {
        response: {
          data: {
            errors: {}
          }
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).not.toHaveBeenCalled();
    });

       it('should handle axios error with null data', () => {
      const mockError = {
        response: {
          data: null
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith(null);
    });

     it('should handle axios error with undefined data', () => {
      const mockError = {
        response: {
          data: undefined
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith(undefined);
    });

    it('should prioritize array errors over object errors', () => {
      const mockError = {
        response: {
          data: {
            err: [
              { description: 'Array error' }
            ],
            errors: {
              field: 'Object error'
            }
          }
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith('Array error');
    });

    it('should prioritize errors object over simple data', () => {
      const mockError = {
        response: {
          data: {
            errors: {
              field: 'Object error'
            },
            message: 'Simple message'
          }
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith('Object error');
    });

    it('should handle 401 error with other data present (401 takes priority)', () => {
      const mockError = {
        response: {
          status: 401,
          data: {
            errors: {
              field: 'Some error'
            }
          }
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith('Unauthorized access. Please log in again.');
      expect(mockPushState).toHaveBeenCalledWith({}, 'LoginPage', '/login');
    });

    it('should handle axios error with response object but no data', () => {
      const mockError = {
        response: {
          status: 500
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith(undefined);
    });

    it('should handle axios error with response that has err in else clause', () => {
      const mockError = {
        response: {
          status: 500,
          data: undefined
        }
      };

      mockedAxios.isAxiosError.mockReturnValue(true);

      handleError(mockError);

      expect(mockToastWarning).toHaveBeenCalledTimes(1);
      expect(mockToastWarning).toHaveBeenCalledWith(undefined);
    });
  });
});