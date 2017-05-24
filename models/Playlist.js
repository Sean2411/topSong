/**
 * Created by lu1 on 5/23/17.
 */
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var playlistSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Playlist', playlistSchema);