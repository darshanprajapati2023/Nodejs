const libExpress = require('express');
const util = require('../../utils')
const ObjectId = require('mongodb').ObjectId
const teacherRouter = libExpress.Router()
const libValidator = require('validator')

const libJWT = require('jsonwebtoken')


//route to get all teachers
teacherRouter.get("/", (req, res, _) => {

    util.getDbConnection(function (db) {

        if (db) {
            db.collection("teachers").find().toArray()
                .then((teacherData) => res.status(200).json({ data: teacherData }))
                .catch(e => res.status(500).json({ error: "Internal Server Error" }))

        } else {
            res.status(500).json({ error: "Internal Server Error" })
        }
    })


})

//route to get specific teacher
teacherRouter.get("/:id", (req, res, _) => {

    util.getDbConnection(function (db) {

        if (db) {
            db.collection("teachers").find({ _id: new ObjectId(req.params.id) }).toArray()
                .then((teacherData) => res.status(200).json({ data: teacherData }))
                .catch(e => res.status(500).json({ error: "Internal Server Error" }))

        } else {
            res.status(500).json({ error: "Internal Server Error" })
        }
    })


})


teacherRouter.post("/login", (req, res) => {

    if (req.body.email && req.body.password) {

        if (libValidator.isEmail(req.body.email)) {

            util.getDbConnection(function (db) {
                if (db) {
                    db.collection("teachers").find({ email: req.body.email, password: req.body.password }).toArray()
                        .then(teacherArray => {

                            if (teacherArray.length > 0) {

                                libJWT.sign(teacherArray[0], process.env.JWT_SIGN, { expiresIn: '1h' }, (err, token) => {

                                    if (err) {
                                        res.status(401).json({ auth: false })
                                    } else {

                                        //login done
                                        req.session.noOfVisit = 0

                                        res.cookie('jwtCookie', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })
                                        res.status(200).json({ auth: true })

                                    }

                                })



                            } else {
                                res.status(401).json({ auth: false })

                            }
                        })
                        .catch(e => res.status(401).json({ auth: false }))
                } else {
                    res.status(401).json({ authorized: false })

                }
            })
        } else {
            res.status(401).json({ authorized: false, error: "Invalid email" })
        }

    } else {
        res.status(401).json({ authorized: false })
    }

})


// teacherRouter.router.post()

//route to delete specific teacher
/*
teacherRouter.delete("/:id", (req, res, next) => {
 
    util.getDbConnection(function (db) {
 
        if (db) {
 
            db.collection("teachers").deleteOne({ "_id": new ObjectId(req.params.id) })
                .then((teacherData) => res.status(202).json({ data: teacherData }))
                .catch(e => res.status(500).json({ error: "Internal Server Error - Failed To Delete Teacher" }))
 
        } else {
            res.status(500).json({ error: "Internal Server Error" })
        }
 
    })
 
 
})*/
// teacherRouter.router.put()

teacherRouter.use("*", (req, res, next) => {
    res.status(404).json({ error: "Invalid Method" })
})



module.exports = teacherRouter



