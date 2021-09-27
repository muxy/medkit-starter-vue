/* eslint-disable */

const path = require("path");
const ZipPlugin = require("zip-webpack-plugin");

const pkg = require("./package.json");

const config = {
  publicPath: "./",
  pages: {
    config: "./src/config/main.js",
    overlay: "./src/overlay/main.js",
  },

  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src"));

    // SVG Inliner
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader");

    // Zip Plugin
    config
      .plugin("zip-plugin")
      .use(ZipPlugin, [{ filename: `${pkg.name}.zip` }]);

    // ESLint autofix
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true,
      });

    // Fix source maps in development mode
    if (process.env.NODE_ENV === "development") {
      config.devtool("eval-source-map");

      config.output.devtoolModuleFilenameTemplate = info =>
        info.resourcePath.match(/\.vue$/) &&
        !info.identifier.match(/type=script/)
          ? `webpack-generated:///${info.resourcePath}?${info.hash}`
          : `webpack-code:///${info.resourcePath}`;

      config.output.devtoolFallbackModuleFilenameTemplate =
        "webpack:///[resource-path]?[hash]";
    }
  },

  devServer: {
    host: "0.0.0.0",
    port: 4000,
  },
};

module.exports = config;
