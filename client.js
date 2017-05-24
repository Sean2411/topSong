/**
 * Created by lu1 on 5/24/17.
 */
var express    = require("express");
var morgan     = require("morgan");
var app        = express();

var port = process.env.PORT_CLIENT || 3000;

app.use(morgan("dev"));
app.use(express.static("./public"));
// app.use('/bower_components',  express.static('./bower_components'));


app.get("/", function(req, res) {
    res.sendFile("./public/index.html");
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});