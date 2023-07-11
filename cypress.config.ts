import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require("cy-verify-downloads")

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", verifyDownloadTasks)
    },
    baseUrl: "http://uitestingplayground.com",
  },
  env: {
    demoVar: "demo",
    demoQA: "https://demoqa.com",
    theInternet: "https://the-internet.herokuapp.com",
    Angular: "https://www.globalsqa.com/",
    hideXhr: true,
  },

});
