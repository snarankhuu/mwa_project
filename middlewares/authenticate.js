module.exports = (req, res, next) => {
    //auth
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
}