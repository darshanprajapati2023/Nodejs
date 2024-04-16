const libFs = require(`fs`);

// libFs.readFile("1.txt", (error, data) => {

//     if (error) {
//         console.log("FAILED TO READ FILE" + error)
//     } else {
//         console.log(data.toString())
//     }
// })

// libFs.open("darshan.txt", "w", (error, file) => {

//     if (error) {
//         console.log(error)
//     } else {
//         // console.log("FILE CREATED")
//         libFs.writeFile(file, "Hello World", (error) => {

//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log("Data written success")
//             }
//         })
//     }
// })

// libFs.appendFile("darshan.txt", 'This is my text.', (error) => {

//     if (error) {
//         console.log(error)
//     } else {
//         console.log("Updated!")
//     }
// })

libFs.rename("darshan.txt", "krushil.txt", (error) => {

    if (error) {
        console.log(error)
    } else {
        console.log("File Renamed!")
    }

})