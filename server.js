var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
process.env.HTTPS = 'true';
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var https = require('https');
var bodyParser = require('body-parser');


var methodOverride = require('method-override');


const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true
};
mongoose.Promise = global.Promise;

var connectionString = 'mongodb://localhost:27017/demo';

mongoose.connect(connectionString, option);

//Add those events to get more info about mongoose connection:

// Connected handler
mongoose.connection.on('connected', function (err) {
    console.log("Connected to DB using chain: " + connectionString);
});

// Error handler
mongoose.connection.on('error', function (err) {
    console.log(err);
});

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
    console.log("Invalid " + connectionString);
});



var Doctor = require('./src/api/model/userModel');

app.use(bodyParser.json({ limit: '50mb' })); app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

var userRoutes = require('./src/api/route/userRoutes');
userRoutes(app);


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3034, function () {
    console.log('app is running on port 3034');
});
