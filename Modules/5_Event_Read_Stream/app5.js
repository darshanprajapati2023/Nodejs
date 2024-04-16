const libFs = require(`fs`)

const rs = libFs.createReadStream("20M.txt")

rs.on('open', function () {
    console.log('This file is open')
})

rs.on('readable', function () {
    console.log('data : ' + rs.read())
})

rs.on('end', function () {
    console.log('This file is end')
})