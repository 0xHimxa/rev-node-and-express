
// GLobals expample sincee it server no window

//use for get user operating stystem info
const os = require('os')

console.log(os.type())
console.log(os.homedir())
console.log(os.version())

//for  getting current dirrecry name
console.log(__dirname)

// for geting current file name
console.log(__filename)


//require : for importing stuffs it replace import
// process : info about env


console.log(process)


// call back avaivalble

setTimeout(()=> console.log('hi'), 10)
setInterval(()=> console.log('hi'), 50)