const libUrl = require(`url`)

const addr = 'http://localhost:8080/default.htm?year=2017&month=february';

const data = libUrl.parse(addr, true)

console.log(data.query.year)