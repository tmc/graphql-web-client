var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: { path: './dist/', filename: 'app.js' },
  module: { loaders: [
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.scss$/, loader: 'style!sass' },
    { test: /\.jsx?$/, 
      loader: 'babel-loader?optional=runtime&stage=0',
      include: path.join(__dirname, 'src')
    }
  ] },
  externals: { 'react': 'React' }
};
