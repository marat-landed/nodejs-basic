var express = require('express'),
    fs = require('fs'),
    app = express();
//    eps = require('ejs'),
//    morgan = require('morgan');
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
	ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var app = express();
// app is running!
app.get('/', function(req, res) {
    res.send('Hello from NodeJS  at '+ new Date() + '. Edit 06-04-18 16:14');
});
app.listen(port, ip);
module.exports = app;