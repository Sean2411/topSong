/**
 * Created by lu1 on 5/24/17.
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var songSchema = new Schema({
    title: String,
    track: String,
    artist: String,
    album: String,
    note: String,
    customImage: String

});

module.exports = mongoose.model('Song', songSchema);