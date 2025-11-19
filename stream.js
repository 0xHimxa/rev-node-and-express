const fs =  require('fs')
const path = require('path')
const read_file = path.join(__dirname,'test.txt')

//reading streams
const readSteam = fs.createReadStream(read_file);

readSteam.on('data',(chunck)=>{
    console.log('readed this parth', chunck)
})


//writing streams

const writeStream = fs.createWriteStream(path.join(__dirname,'stream.txt'))

// connect the to streams the reading to the write with pipe, aka move data from read file to write

readSteam.pipe(writeStream)