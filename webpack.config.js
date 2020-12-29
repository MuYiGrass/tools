const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src',
  output: {
    path: __dirname + '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'commonJs'
    })
  ]
}
