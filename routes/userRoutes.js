const mongoose = require("mongoose");
const User = mongoose.model("users");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');

module.exports = app => {

    const baseRoute = '/api/user/';

    app.post(baseRoute + 'signup', (req, res, next) => {
        // check for duplicate email

        //save
        let user = new User();
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.userPassword.password;
        console.log('prepare to save');
        user.save((err, doc) => {
            if (!err){
                console.log('after saving');
                res.status(200).json({'sucess': 200});
            }
            else {
                next(err);
            }
        });
    });

    app.post(baseRoute + 'validateEmail', (req, res) => {
        User.find({email: req.body.email}, (err, users) => {
            console.log(req.body.email);
            // if (err) console.log(err);
            res.status(200).json(users.length > 0);
        });
    });

    app.post(baseRoute + 'signin', (req, res) => {
        //TODO: check user exist DB
        let userExist = true;
        let credentials = req.body;

        if (userExist) {
            //token key
            const token = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: 'RS256',
                expiresIn: 1,
                subject: credentials.username
            });

            // TODO: send token expired
            res.status(200).json(
                {idToken: token}
            );
        } else {
            res.status(200).json({
                "status": "fail",
                "message": "username and/or password incorrect!"
            });
        }
    });

    app.get(baseRoute + 'profile', (req, res) => {
        User.find({}, (err, users) => {
            if (err) console.log(err);
            res.status(200).json(users);
        })

    });
};
