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
    // never bail
    return info.failedTests.length > 0;
  }
};
