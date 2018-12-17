const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = app => {

    const baseRoute = '/api/user/';

    app.post(baseRoute + 'signup', (req, res) => {
        // check for duplicate email
        res.status(200).json(req.body);
    });

    
};
