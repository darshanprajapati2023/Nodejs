const libExpress = require('express');
const routerTeacher = require('./rest/teacher')
const routerBook = require('./rest/book')




apiController = libExpress.Router()



apiController.use("/teacher", routerTeacher)
apiController.use("/book", routerBook)
//apiController.use("/doctor", routerTeacher)

apiController.use("*", (req, res, next) => {
    res.status(404).json({ error: "No such API Found" })
})


module.exports = apiController