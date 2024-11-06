exports.config = {
  name: "codeceptjs-npm-js",
  tests: "./specs/*.spec.js",
  output: "./output",
  plugins: {
    allure: {
      resultsDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
