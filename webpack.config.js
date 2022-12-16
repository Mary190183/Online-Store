/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// let mode = 'development';

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: path.resolve(__dirname, "./src/index.ts"),
    item: path.resolve(__dirname, "./src/item.ts"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.ts$/,
  //       use: "ts-loader",
  //       exclude: /node_modules/,
  //     },

  //       { test: /\.txt$/, use: 'raw-loader' },
  //       {
  //           test: /\.css$/i,
  //           use: ['style-loader', 'css-loader'],
  //       },
  //              //Шрифты
  
  //   {
  //       test: /\.(woff2?|eot|ttf|otf)$/i,
  //       type: 'asset/resource',
  //     },

    //     // изображения
    //     {
    //       test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    //       type: mode === 'production' ? 'asset' : 'asset/resource'
    //     },
    //   //  шрифты и SVG
    //       {
    //           test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    //           type: mode === 'production' ? 'asset' : 'asset/inline'
    //       },
    //       //аудио
    //       {
           

    //         test: /\.(?:mp3|wav|ogg|mp4)$/i,
    //         use: "file-loader",
    //         type: mode === 'production' ? 'asset' : 'asset/resource'
    //         // generator: {
    //         //   filename: 'assets/sounds/[hash][ext]',
    //         // },
    //       },
    // ],
// },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    // assetModuleFilename: 'assets/[name][ext][query]',
    // clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/item.html"),
      filename: "item.html",
      chunks: ["item"],
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "./src/assets"), to: path.resolve(__dirname, "./dist/assets") }],
    })
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    watchFiles: ["src/**/*"],
    open: true,
    hot: true,
  },
};
