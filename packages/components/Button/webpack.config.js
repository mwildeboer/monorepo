const baseWebpack = require("@monorepo/webpack");
const path = require("path");

module.exports = Object.assign(baseWebpack, {
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
});
