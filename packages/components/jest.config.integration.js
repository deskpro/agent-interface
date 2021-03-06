const { join } = require("path");

const config = require("./jest.config");

config.testMatch = [
  join(__dirname, "src/**/*.integration.test.{js,jsx,ts,tsx}")
];
config.setupFilesAfterEnv = ["./jest.setup.integration.js"];
config.coverageDirectory = "coverage/integration";
config.snapshotSerializers = ["enzyme-to-json/serializer"];
console.log("RUNNING INTEGRATION TESTS");
module.exports = config;
