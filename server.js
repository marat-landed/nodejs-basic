/*
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
*/

//  OpenShift sample Node application
var express = require('express'),
    app     = express();
    //morgan  = require('morgan');

/*
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))
*/
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
/*
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";
    console.log("mongoURL",mongoURL);
    if (mongoURL == null) 
	  console.log("mongoURL == null");	
	else 	
	  console.log("mongoURL != null");	
console.log("process.env",process.env);
console.log("process.env.DATABASE_SERVICE_NAME",process.env.DATABASE_SERVICE_NAME);
if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
  console.log("mongoURL == null",mongoURL);	
  var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
      mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
      mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
      mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
      mongoPassword = process.env[mongoServiceName + '_PASSWORD']
      mongoUser = process.env[mongoServiceName + '_USER'];

  if (mongoHost && mongoPort && mongoDatabase) {
    mongoURLLabel = mongoURL = 'mongodb://';
    if (mongoUser && mongoPassword) {
      mongoURL += mongoUser + ':' + mongoPassword + '@';
    }
    // Provide UI label that excludes user id and pw
    mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
    mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;

  }
}
var db = null,
    dbDetails = new Object();

var initDb = function(callback) {
  console.log("initDb-0");	
  if (mongoURL == null) return;
  console.log("initDb-1");	

  var mongodb = require('mongodb');
  if (mongodb == null) return;

  mongodb.connect(mongoURL, function(err, conn) {
    if (err) {
      callback(err);
      return;
    }

    db = conn;
    dbDetails.databaseName = db.databaseName;
    dbDetails.url = mongoURLLabel;
    dbDetails.type = 'MongoDB';

    console.log('Connected to MongoDB at: %s', mongoURL);
  });
};
*/
app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already initialized.
  /*
  if (!db) {
    initDb(function(err){
	  console.log("err",err);
	});
  }
  if (db) {
    var col = db.collection('counts');
    // Create a document with request IP and current time of request
    col.insert({ip: req.ip, date: Date.now()});
    col.count(function(err, count){
      if (err) {
        console.log('Error running count. Message:\n'+err);
      }
      res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
    });
  } else {
    res.render('index.html', { pageCountMessage : null});
  }
  */
  res.send('Hello from NodeJS  at '+ new Date() + '. Edit 06-04-18 16:14');	
});

/*
app.get('/pagecount', function (req, res) {
  //console.log("req",req.headers); 	
  // попробуйте инициализировать db для каждого запроса, если он еще не инициализирован.
  if (!db) {
	console.log("!db");  
    initDb(function(err){
	  console.log("err",err);
	});
  }
  if (db) {
	console.log("db",db);  
	var cursor = db("test").collection('students').find(); 
	cursor.forEach(function(item) {
	  console.log("item",item);	
      if (item != null) {
		 console.log(item); 
         str = str + "    test firstName  " + item.firstName + "</br>";
      }
    }, function(err) {
      res.send(str);
      db.close();
    });  
	  
    db.collection('students').count(function(err, count ){
      res.send('{ pageCount: ' + count + '}');
    });
  } else {
    res.send('{ pageCount: -1 }');
  }
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

initDb(function(err){
  console.log('Error connecting to Mongo. Message:\n'+err);
});
*/

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;
