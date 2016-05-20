/**
 * Created by Mazen on 5/19/16.
 * * testAppServer.js
 */

var http  = require ( "http" );
var mongo = require ( "mongodb" );

var mongo_url  = "mongodb://localhost:27017/sample";
var mongo_conn = mongo.MongoClient;

var test_mongo_conn = function( callback ) {
    mongo_conn.connect ( mongo_url, function( err, db ) {
        if ( err ) {
            console.log ( err );
            if ( callback ) callback ( "NOT WORKING" );
        } else {
            console.log ( "Connected to server." );
            if ( callback ) callback ( "OK" );
        }
        if ( db ) db.close ();
    } );
};

http.createServer ( function( req, res ) {
    res.writeHead ( 200, { 'Content-Type': 'text/plain' } );
    res.write ( 'Hello Node.js!\n' );
    test_mongo_conn ( function( status ) {
        res.write ( 'MongoDB connection: ' + status + '\n' );
        res.end ();
    } );
} ).listen ( process.env.PORT );