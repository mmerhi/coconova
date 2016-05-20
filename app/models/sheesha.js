/**
 * Created by Mazen on 5/19/16.
 * * app/models/sheesha.js
 */

var mongoose = require ( 'mongoose' );

// Define model (module.exports allows us to pass this to other files when called)
module.exports = mongoose.model (
    'sheesha', {
        make:        { type: String, default: '' },
        dateAdded:   { type: Date, default: Date.now },
        title:       String,
        price:       Number,
        images:      [ String ],
        dimensions:  { size: String, height: Number, width: Number, weight: Number },
        description: String,
        metaGSA:     [ String ]

    } );