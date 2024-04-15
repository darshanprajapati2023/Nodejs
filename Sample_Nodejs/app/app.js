//set up environment configuration
require(`dotenv`).config()
//import util
const util = require(`../utils`)
//http library
const libExpress = require(`express`)
const libCookieParser = require('cookie-parser')
const libSession = require('express-session');

const libPug = require('pug')
const libPath = require('path')
const IP_ADDRESS = '127.0.0.1'
//importing middlewares
const middlewarerequestLogger = require('../middleware/requestLogger')


//start app
const app = libExpress()
//session configuration
app.use(libSession(
    {
        secret: process.env.SESSION_SIGN,
        resave: false,
        saveUninitialized: false
    }
))
//incoming req, cookie, parse
app.use(libCookieParser())
//app need to parse body into json if received
app.use(libExpress.json())
//allow static file request
app.use(libExpress.static(libPath.join(process.cwd(), "public")))


//template engine - pug
app.set('view engine', 'pug')
//User Request Logger
app.use(middlewarerequestLogger)
//API
app.use("/api", require('../router/api'))
//UI
app.use(require('../router/ui'))


app.listen(process.env.APP_PORT, process.env.IP_ADDRESS, () => {
    util.logger(`Server is listening at http://${IP_ADDRESS}:${process.env.APP_PORT}`, "success")
})