const expressJwt = require('express-jwt');
const fs = require('fs');
const RSA_PUBLIC_KEY = fs.readFileSync('./public.key');

module.exports = (req, res, next) => {
    //auth

    // TODO: check backend jwt
    const checkIfAuthenticated = expressJwt({
        secret: RSA_PUBLIC_KEY
    });
    console.log(checkIfAuthenticated);

    if (req.url === '/'
        || req.url === '/api/user/signin'
        || req.url === '/api/user/signup'
    )
    {
        console.log('non-authorize');
    } else {
        console.log('must authorize');
    }
    next();
};