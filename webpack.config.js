const dotenv = require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { DefinePlugin } = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    host: process.env.HOST || "0.0.0.0",
    port: process.env.PORT || "3000",
    historyApiFallback: true,
    client: {
      overlay: true
    }
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/i,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(svg|png)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ]
};
