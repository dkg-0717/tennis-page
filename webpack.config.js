const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[id].[chunkhash].js"
  },
  optimization: {
    minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')(
                  {
                    grid: 'autoplace'
                  }),
              ]
            }
          }
        ]
      },
      {
        test: /\.jpg|png|gif|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[hash].[ext]",
            outputPath: "/assets"
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, "dist/js/*.dll.js"),
      outputPath: "js",
      publicPath: "js"
    }),
    new CleanWebpackPlugin({
      cleanOneceBeforeBuildPatterns: ["**/app.*"]
    })
  ]
}