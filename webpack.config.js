const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  stats: "minimal",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader"
          },
          "less-loader"
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|.yarn)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/i,
        use: {
          loader: "vue-loader",
          options: {
            postcss: {
              config: {
                path: path.resolve("./")
              }
            },
            loaders: {
              js: "babel-loader",
              less: "less-loader"
            }
          }
        }
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ]
};
