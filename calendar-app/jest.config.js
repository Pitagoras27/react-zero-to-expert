module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [],
  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
  },
  "collectCoverage": true,
  "coverageReporters": ["lcov"],
  "coverageDirectory": "test-coverage",
  "coverageThreshold": {
    "global": {
    "branches": 0,
    "functions": 0,
    "lines": 0,
    "statements": 0
    }
  }
}