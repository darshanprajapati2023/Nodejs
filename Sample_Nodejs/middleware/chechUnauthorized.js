

module.exports = (req, res, next) => {

    if (req.cookies.jwtCookie) {

        res.redirect("/dashboard")

    } else {

        next()
    }


}