module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./test-setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-stub',
  },
};
