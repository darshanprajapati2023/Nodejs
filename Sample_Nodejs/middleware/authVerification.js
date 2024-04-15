const libJWT = require('jsonwebtoken')


module.exports = (req, res, next) => {
    if (req.cookies.jwtCookie) {

        libJWT.verify(req.cookies.jwtCookie, process.env.JWT_SIGN, (error, decode) => {

            if (error) {
                res.clearCookie('jwtCookie')
                res.redirect('/')

            } else {
                next()
            }
        })


    } else {
        res.redirect('/')
    }
}