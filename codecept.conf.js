exports.config = {
  name: "codeceptjs-npm-js",
  tests: "./specs/*.spec.js",
  output: "./output",
  plugins: {
    allure: {
      outputDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
