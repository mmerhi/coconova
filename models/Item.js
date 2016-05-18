/**
 * Created by Mazen
 */

var mongoose = require ( 'mongoose' );

// Create the ItemSchema.
var ItemSchema = new mongoose.Schema ( {
    title: {
        type:     String,
        required: true
    },
    url:   {
        type:     String,
        required: true
    }
} );

// Export the model.
module.exports = mongoose.model ( 'item', ItemSchema );