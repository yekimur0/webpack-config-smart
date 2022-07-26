/* eslint-disable no-undef */
/* eslint-disable max-len */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = (env, argv) => {
 const isProd = argv.mode === 'production'
 const isDev = !isProd


 const filename = (ext) => isProd ? `[name].[contenthash].bundle.${ext}` : 
       `[name].bundle.${ext}`

 const plugins = () => {
  const basePlugins = [
   new HtmlWebpackPlugin({
      template: './index.html'
   }),
   new CopyPlugin({
    patterns: [
     {
     from: path.resolve(__dirname, 'src', 'favicon.ico'), 
     to: path.resolve(__dirname, 'dist')}
    ]
   }),
   new MiniCssExtractPlugin({
    filename: filename('css')
   }), 
  ]
  if (isDev) {
   basePlugins.push(new ESLintPlugin())
  }

  return basePlugins;
 }

 return {
   context: path.resolve(__dirname, 'src'),
   entry: {
    // Точка входа
     main: [
      'core-js/stable',
      'regenerator-runtime/runtime',
      './index.js'
     ]
   },
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: filename('js'),
    clean: true
   },
   resolve: {
    extensions: ['.js'],
    alias: {
     '@': path.resolve(__dirname, 'src'), // когда пишем символ @ нас ссылает на папку src
     '@core': path.resolve(__dirname, 'src', 'core') // когда пишем символ @core нас ссылает на папку core
    }
   },
   devServer: {
    port: 3030,
    open: true,
    hot: true,
    watchFiles: './'
   },

   plugins: plugins(),
   devtool: isDev ? 'source-map' : false,
   module: {
    rules: [
     {
       test: /\.s[ac]ss$/i,
       use: [
         // "style-loader",
         MiniCssExtractPlugin.loader,
         'css-loader',
         'sass-loader',
       ],
     },
     {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
                ['@babel/preset-env', {targets: 'defaults'}]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    }
   ],
  }
  }
}


