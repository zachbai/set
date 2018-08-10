const path = require('path');

const APP_DIR = path.resolve(__dirname, './client/src')
const BUILD_DIR = path.resolve(__dirname, './client/dist')

module.exports = {
  entry: {
    main: APP_DIR + '/root.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: BUILD_DIR,
  },
  module:   {
    rules: [
      {
				test: /(\.css|.scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}]
			},
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['react', 'env']
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
}