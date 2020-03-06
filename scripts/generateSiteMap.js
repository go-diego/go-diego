const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://godiego.me",
  pagesDirectory: path.resolve(__dirname, "../src/pages"),
  targetDirectory: "public/",
  nextConfigPath: path.resolve(__dirname, "../next.config.js"),
  ignoredExtensions: ["png", "jpg"]
});
