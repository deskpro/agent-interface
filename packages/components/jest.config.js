const { join } = require("path");
const pkg = require("./package.json");

module.exports = {
  displayName: pkg.name,
  rootDir: __dirname,
  collectCoverageFrom: ["./src/**/*.{js,ts,tsx}", "!**/*.test.{js,ts,tsx}"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: { "\\.css$": "<rootDir>/__mocks__/stylesMock.js" },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "jest-svg-transformer"
  },
  testMatch: [join(__dirname, "src/**/*.test.{js,jsx,ts,tsx}")],
  collectCoverage: true,
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  }
};
