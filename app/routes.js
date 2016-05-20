/**
 * Created by Mazen on 5/19/16.
 * * app/routes.js
 */

var Sheesha = require ( './models/sheesha' );

module.exports = function( app ) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get ( '/api/sheeshas', function( req, res ) {
        // use mongoose to get all sheeshas in the database
        Sheesha.find ( function( err, sheeshas ) {

            // if there is an error retrieving, send the error.
            // nothing after res.send(err) will execute
            if ( err )
                res.send ( err );

            res.json ( sheeshas ); // return all sheeshas in JSON format
        } );
    } );

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get ( '*', function( req, res ) {
        res.sendfile ( './public/views/index.html' ); // load our public/index.html file
    } );

};