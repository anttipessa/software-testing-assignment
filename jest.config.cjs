module.exports = {
  testEnvironment: 'node',
  verbose: true,
  setupFilesAfterEnv: ["jest-extended/all"],
  coveragePathIgnorePatterns: ["src/.internal"]
};