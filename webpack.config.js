var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheet.css'
    })
  ],
  entry: path.join(__dirname, "client/app.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client/main")
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.(jpg|png|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]',
      },
    },
  ]
  }
}

// module.exports = {
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: 'stylesheet.css'
//     })
//   ],
//   entry: path.join(__dirname, "client/app.jsx"),
//   output: {
//     filename: "bundle.js",
//     path: path.join(__dirname, "client/main")
//   },
//   module: {
//     rules: [{
//       test: /\.jsx?/,
//       exclude: /node_modules/,
//       use: {
//         loader: "babel-loader"
//       }
//     }, {
//       test: /\.css$/,
//       use: [
//         'style-loader',
//         'css-loader'
//       ]
//     }]
//   }
// }