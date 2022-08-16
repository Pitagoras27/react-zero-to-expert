module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: []
  // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
  // !Uncomment in its time
  // moduleNameMapper: {
  //     '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
  // },
}