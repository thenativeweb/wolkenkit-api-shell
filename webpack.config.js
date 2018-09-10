const path = require('path');

const CompressionPlugin = require('compression-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      processenv = require('processenv');

const env = processenv('NODE_ENV') || 'development';

const rootDirectory = env === 'production' ? path.join(__dirname, 'dist') : path.join(__dirname, 'src');

const configuration = {
  mode: env,
  entry: path.join(rootDirectory, 'index'),
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  output: {
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(rootDirectory, 'index.html')
    })
  ]
};

if (env === 'development') {
  configuration.module = {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          rootDirectory
        ],
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  };
}

if (env === 'production') {
  configuration.plugins.push(new CompressionPlugin());
}

module.exports = configuration;
