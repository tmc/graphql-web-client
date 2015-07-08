var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hotreload.config');

var port = process.env.ENV_VARIABLE || 3000;
new WebpackDevServer(webpack(config), {
  contentBase: "./dist",
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:' + port);
});
