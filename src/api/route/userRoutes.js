'use strict';
module.exports = function (app) {
    var user = require('../controller/userController');

    app.route('/register')
        .post(user.add_user);

    app.route('/login')
        .post(user.login);


    app.route('/list_user')
        .get(user.list_user);

    };