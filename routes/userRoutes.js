const mongoose = require("mongoose");
const User = mongoose.model("users");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');

module.exports = app => {

    const baseRoute = '/api/user/';

    app.post(baseRoute + 'signup', (req, res, next) => {
        //save
        let user = new User();
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.userPassword.password;
        console.log('prepare to save');
        user.save((err, doc) => {
            if (!err) {
                console.log('after saving');
                res.status(200).json({'sucess': 200});
            } else {
                next(err);
            }
        });
    });

    app.post(baseRoute + 'validateEmail', (req, res) => {
        User.find({email: req.body.email}, (err, users) => {
            console.log(req.body.email);
            if (err) console.dir(err);
            res.status(200).json(users.length > 0);
        });
    });

    app.post(baseRoute + 'signin', (req, res, next) => {
        let credentials = req.body;

        User.findOne({email: credentials.email}, (err, user) => {
            if (err) next(err);

            //email exists
            if (user) {
                if (!user.verifyPassword(credentials.password)) {
                    res.status(400).json({
                        "status": "fail",
                        "message": "pass is not correct!"
                    });
                } else {
                    //token key
                    const token = jwt.sign({}, RSA_PRIVATE_KEY, {
                        algorithm: 'RS256',
                        expiresIn: 3000,
                        subject: credentials.email
                    });

                    // TODO: send token expired
                    res.status(200).json(
                        {idToken: token}
                    );
                }
            } else {
                res.status(400).json({
                    "status": "fail",
                    "message": "username does not exist!"
                });
            }
        });
    });

    app.get(baseRoute + 'profile', (req, res) => {
        User.findOne({email: req.query.email}, (err, users) => {
            if (err) console.log(err);
            res.status(200).json(users);
        });

        console.log('user profile');
    });
};
