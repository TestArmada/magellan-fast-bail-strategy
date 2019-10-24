module.exports = {
  name: "testarmada-magellan-fast-bail-strategy",
  description: "Magellan will bail as long as one test fails",
  bailReason: "At least one test has failed",

  // info format
  /*
   * {
   *  totalTests: [] // total tests
   *  passedTests: [] // successful tests
   *  failedTests: [] // failed tests
   * }
   */
  decide(info) {
    if (info.failedTests.length > 0) {
      const failedTest = info.failedTests[info.failedTests.length - 1];
      return failedTest.attempts === failedTest.maxAttempts;
    }

    return false;
  }
};
