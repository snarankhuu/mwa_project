const expressJwt = require('express-jwt');
const fs = require('fs');
const RSA_PUBLIC_KEY = fs.readFileSync('./public.key');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.url === '/'
        || req.url === '/api/user/signin'
        || req.url === '/api/user/signup'
    ) {
        console.log('no need authorize');

    } else {
        console.log('must authorize');
//auth
        let token;
        console.log(req.headers);
        if ('authorization' in req.headers)
            token = req.headers['authorization'].split(' ')[1];

        if (!token) {
            return res.status(403).json({message: 'No token'});
        } else {
            jwt.verify(token, RSA_PUBLIC_KEY,
                (err, decoded) => {
                    if (err)
                        return res.status(500).send({auth: false, message: 'Token authentication failed.'});
                    else {
                        req._id = decoded._id;
                        next();
                    }
                }
            )
        }
    }
    next();
};