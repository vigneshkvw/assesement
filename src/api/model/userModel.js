
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {
        type: String,
        default:""
    },
    email: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    },
    real_password: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: "0"
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('users', userSchema);