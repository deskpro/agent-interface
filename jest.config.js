module.exports = {
  rootDir: __dirname,
  collectCoverageFrom: [
    "packages/components/src/**/*.{js,ts,tsx}",
    "!**/*.test.{js,ts,tsx}"
  ],
  projects: ["<rootDir>/packages/*"],
  setupTestFrameworkScriptFile: "<rootDir>/jest.setup.js",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(j|t)sx?$": "ts-jest"
  }
};
