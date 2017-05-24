/**
 * Created by lu1 on 5/23/17.
 */
var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var morgan     = require('morgan');
var app        = express();

require('dotenv').config();

var port = process.env.PORT_SERVER || 3001;
var Playlist = require('./models/Playlist');
var Song = require('./models/Song');


// Connect to DB
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/playlist');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',  'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});



app.post('/addPlaylist', function(req, res) {
    Playlist.findOne({name: req.body.name}, function (err, list) {
        if (err){
            res.json({
                type: false,
                data: 'Error occured' + err
            })
        } else {
            if (list){
                res.json({
                    type: false,
                    data: 'Playlist Exist'
                })
            } else {
                var nlist = new Playlist();
                nlist.name = req.body.name;
                nlist.save(function (err, newlist) {
                    res.json({
                        data: newlist + 'saved'
                    })
                })
            }
        }
    })
});

app.get('/addPlaylist', function(req, res){
    Playlist.find({}, function(err, playlists) {
        var playlistMap = [];

        playlists.forEach(function(playlist) {
            // playlistMap[playlist._id] = playlist;
            playlistMap.push(playlist.name);
        });

        res.json({
            data: playlistMap
        });
    });
});

app.delete('/delPlaylist', function (req, res) {
   Playlist.remove({name: req.body.name}, function (err) {
       if (err){
           res.json({
               type: false,
               data: 'Playlist Exist'
           })
       } else {
           res.json({
               type: true,
               data: 'Succeed'
           })
       }
   })
});

app.post('/addSong', function(req, res) {
    Song.findOne({title: req.body.title, track: req.body.track, artist: req.body.artist}, function (err, song) {
        if (err){
            res.json({
                type: false,
                data: 'Error occured' + err
            })
        } else {
            if (song){
                res.json({
                    type: false,
                    data: 'Playlist Exist'
                })
            } else {
                var nSong = new Song();
                nSong.title = req.body.title;
                nSong.track = req.body.track;
                nSong.artist = req.body.artist;
                nSong.album = req.body.album;
                nSong.note = req.body.note;
                nSong.customImage = req.body.customImage;
                nSong.save(function (err, newSong) {
                    res.json({
                        data: newSong + 'saved'
                    })
                })
            }
        }
    })
});

app.post('/getSong', function(req, res) {
    Song.find({title: req.body.title}, function(err, songs) {
        var songsMap = [];

        songs.forEach(function(song) {
            // playlistMap[playlist._id] = playlist;
            songsMap.push(song);
        });

        res.json({
            data: songsMap
        });
    });

});




// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});