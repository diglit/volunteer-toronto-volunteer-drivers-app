const COVERAGE = 80; // test coverage threshold set to 80% 

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/_tests_/**',
    '!jest.config.js',
    '!src/**/*.test.{js,ts,tsx}',
    '!src/**/*.mock.{js,ts,tsx}'
  ],
  coverageThreshold: {
    global: {
      statements: COVERAGE,
      branches: COVERAGE,
      functions: COVERAGE,
      lines: COVERAGE
    }
  },
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
};
