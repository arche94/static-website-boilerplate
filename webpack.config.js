const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: './src/js/main.js',
  plugins: [
    new ESLintPlugin()
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}