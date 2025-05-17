module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts", "json", "node"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/src/**/*.test.(js|ts)"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
