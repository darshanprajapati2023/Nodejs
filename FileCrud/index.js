const dataManager = require('./dataManager')




// dataManager.createObject("movies", { name: "M1", rating: 4.5, type: "action" }, function (error) {
//     console.log(error ? error : "Object Created")
// })


// dataManager.readObject("movies", "1713198073964", (data) =>
//     console.log(data ? data : "failed to read")
// )

// dataManager.deleteObject("movies", "1713198073964", (error) =>
//     console.log(error ? error : "deleted")
// )


dataManager.updateObject("movies", "1713202424700", { type: "romance" }, (error) => {
    console.log(error ? error : "Updated")
})
















// const libExpress = require('express')


// const app = libExpress()




// app.listen(3000, (error) => {

//     if (!error) {
//         console.log("Server started at 3000....")
//     }
// })