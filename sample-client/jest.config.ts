/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  // preset: 'ts-jest',
  // testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/mocks/style-mock.ts',
  },
};
