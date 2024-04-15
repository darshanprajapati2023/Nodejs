const libExpress = require('express');


const routerUI = libExpress.Router()

routerUI.get("/", require('../middleware/chechUnauthorized'), (req, res,) => {

    res.render("index")

})



routerUI.get("/dashboard", require('../middleware/authVerification'), (req, res, next) => {

    req.session.noOfVisit = req.session.noOfVisit + 1
    console.log(req.session.noOfVisit)

    if (req.session.noOfVisit > 3) {
        res.redirect("https://google.com")
        req.session.destroy()
    } else {
        next()
    }
}, (req, res,) => {

    res.render("dashboard")

})
// routerUI.get("/login", (req, res,) => { })
// routerUI.get("/signup", (req, res,) => { })



module.exports = routerUI