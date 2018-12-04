const { join } = require("path");
const pkg = require("./package.json");

module.exports = {
  displayName: pkg.name,
  rootDir: __dirname,
  collectCoverageFrom: ["./src/**/*.{js,ts,tsx}", "!**/*.test.{js,ts,tsx}"],
  setupTestFrameworkScriptFile: "./jest.setup.js",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [join(__dirname, "src/**/*.test.{js,jsx,ts,tsx}")]
};
