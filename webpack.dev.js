const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Also generate a test.html
      filename: "volantino.html",
      template: "./src/volantino.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    }),
    new HtmlWebpackPlugin({
      filename: "reparto.html",
      template: "./src/reparto.html"
    }),
    new HtmlWebpackPlugin({
      filename: "fidelta-carta.html",
      template: "./src/fidelta-carta.html"
    }),
    new HtmlWebpackPlugin({
      filename: "novita.html",
      template: "./src/novita.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
  // devServer: {
  //   before: function (app, server) {
  //     server._watch("./src/**/*.html")
  //   },
  //   contentBase: path.join(__dirname, "src"),
  //   hot: true,
  //   port: 3000,
  //   host: "0.0.0.0"
  // }
})
