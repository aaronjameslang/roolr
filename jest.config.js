/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  maxWorkers: 1,
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
