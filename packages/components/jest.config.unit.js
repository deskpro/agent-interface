const { join } = require("path");

const config = require("./jest.config");

config.testMatch = [join(__dirname, "src/**/*.unit.test.{js,jsx,ts,tsx}")];
console.log("RUNNING UNIT TESTS");
module.exports = config;
