const mongoose = require("mongoose");
const User = mongoose.model("users");
const fs = require("fs");
const jwt = require('jsonwebtoken');
const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');

module.exports = app => {

    const baseRoute = '/api/user/';

    app.post(baseRoute + 'signup', (req, res) => {
        // check for duplicate email
        res.status(200).json({'sucess': 200});
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

};
