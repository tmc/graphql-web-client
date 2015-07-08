var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static('dist'));
var server = app.listen(port);
