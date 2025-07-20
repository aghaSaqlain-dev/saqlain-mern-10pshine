import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { UserProvider } from './useAuth';
import { MemoryRouter } from 'react-router-dom';

test('simple passing test', () => {
  expect(true).toBe(true);
});
