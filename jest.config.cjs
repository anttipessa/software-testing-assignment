module.exports = {
  testEnvironment: "node",
  verbose: true,
  setupFilesAfterEnv: ["jest-extended/all"],
  coveragePathIgnorePatterns: ["src/.internal"],
  collectCoverageFrom: [
    "src/add.js",
    "src/capitalize.js",
    "src/toNumber.js",
    "src/toString.js",
    "src/divide.js",
    "src/filter.js",
    "src/isEmpty.js",
    "src/map.js",
    "src/reduce.js",
    "src/words.js",
  ],
};
