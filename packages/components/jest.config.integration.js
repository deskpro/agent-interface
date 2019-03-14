const { join } = require("path");

const config = require("./jest.config");

config.testMatch = [
  join(__dirname, "src/**/*.integration.test.{js,jsx,ts,tsx}")
];
config.setupTestFrameworkScriptFile = "./jest.setup.integration.js";
console.log("RUNNING INTEGRATION TESTS");
module.exports = config;
