/**
 * Created by Mazen on 5/19/16.
 * * server.js
 */

/**
 * Modules
 * * express
 * * body-parser
 * * method-override
 */
var express        = require ( 'express' );
var app            = express ();
var bodyParser     = require ( 'body-parser' );
var methodOverride = require ( 'method-override' );

/**
 * Config
 * * config files
 * * set listening port
 * * connect to DB
 */
var db   = require ( './config/db' );
var port = process.env.PORT || 8080;
//  [[ uncomment after you enter in your own credentials in config/db.js ]]  mongoose.connect(db.url);

/**
 * Get all data of the body (POST) params
 * * parse application/json
 * * parse application/vnd.api+json as json
 * * parse application/x-www-form-urlencoded
 * * override with the X-HTTP-Method-Override header in the request (simulate DELETE/PUT)
 * * set the static files location /public/img will be /img for users
 */
app.use ( bodyParser.json () );
app.use ( bodyParser.json ( { type: 'application/vnd.api+json' } ) );
app.use ( bodyParser.urlencoded ( { extended: true } ) );
app.use ( methodOverride ( 'X-HTTP-Method-Override' ) );
app.use ( express.static ( __dirname + '/public' ) );

/**
 * Routes
 */
require ( './app/routes' ) ( app ); // configure our routes

/**
 * Start App
 * * startup app at localhost:8080
 * * log listening port
 * * expose app
 */
app.listen ( port );
console.log ( '(app) Magic happens on port ' + port );
exports = module.exports = app;