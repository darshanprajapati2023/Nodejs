const libHttp = require(`http`)

const studentFile = require(`./data/student`)
const teacherFile = require(`./data/teacher`)


// const studentData = [
//     {
//         name: "Darshan1",
//         phone: "1234",
//         std: "12"
//     }, {
//         name: "Darshan2",
//         phone: "1234",
//         std: "12"
//     }, {
//         name: "Darshan3",
//         phone: "1234",
//         std: "12"
//     }
// ]

// const teacherData = [
//     {
//         name: "Teacher1",
//         phone: "1234",
//         std: "12"
//     }, {
//         name: "Teacher2",
//         phone: "1234",
//         std: "12"
//     }, {
//         name: "Teacher3",
//         phone: "1234",
//         std: "12"
//     }
// ]
libHttp.createServer((req, res) => {

    // console.log("Server is running")

    // console.log(req.method)
    // console.log(req.url)

    if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': `application/json` });
        res.write(JSON.stringify(studentFile))

    } else if (req.url == "/teacher") {
        res.writeHead(200, { 'Content-Type': `application/json` });
        res.write(JSON.stringify(teacherFile))
    } else {
        res.writeHead(404, { 'Content-Type': `text/html` });
        res.write("<h1>PAGE NOT FOUND</h1>")
    }
    res.end()

    // res.writeHead(200, { 'Content-Type': `application/json` });
    // res.write(`{data:[]}`)
    // res.end


    // response = {
    //     age: 20,
    //     name: "Darshan",
    //     phone: "1234"
    // }

    // res.write(JSON.stringify(response))
    // res.end()

}).listen(3000)