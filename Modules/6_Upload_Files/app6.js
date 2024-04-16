const libHttp = require("http")
const libFs = require("fs")
const libforMidable = require(`formidable`)
const libChalk = require("chalk")


libHttp.createServer((req, res) => {

    if (req.url == "/") {

        libFs.readFile("form.html", (err, data) => {

            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            }

        })

    } else if (req.url == "/fileupload") {

        const form = new libforMidable.IncomingForm()
        form.parse(req, (error, plainFields, files) => {

            // console.log(files)

            if (error) {
                // console.log(error)
                console.log(libChalk.red(error))
            } else {
                // console.log("plainFields :" + JSON.stringify(plainFields))
                // console.log(Files)


                //uploaded path
                // const file1Path = files.file1[0].filepath;
                // const file2Path = files.file2[0].filepath;

                //new path
                // const file1NewPath = process.cwd() + "/" + files.file1[0].originalFilename;
                // const file2NewPath = process.cwd() + "/" + files.file2[0].originalFilename;

                // const file1NewPath = files.file1[0].originalFilename;
                // const file2NewPath = files.file2[0].originalFilename;

                libFs.copyFile(files.profileimage[0].filepath, files.profileimage[0].originalFilename, (error) => {
                    if (error) {
                        console.log(libChalk.red("FAILED TO SAVE"))
                        res.write("FAILED TO SAVE")
                    } else {
                        console.log(libChalk.green("SAVED"))
                        res.write("SAVED")
                    }
                    res.end()
                    // if (error) console.log(error)
                    // else console.log("DONE FILE 1")


                    // libFs.copyFile(files.file2[0].filepath, files.file2[0].originalFilename, (error) => {
                    //     if (error) console.log(error)
                    //     else console.log("DONE FILE 2")
                })



                // libFs.copyFile(file1Path, file1NewPath, function (err) {
                //     if (err) throw err;
                //     else console.log("DONE FILE 2")

                // });




            }
        })
    } else {
        res.write("PAGE NOT FOUND")
        res.end()
    }
}).listen(3000)