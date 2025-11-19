const {readFile} = require('fs').promises
const path = require('path')
const readpath = path.join(__dirname,'test.txt')

async function readFiles(){

  const val =  await readFile(readpath,'utf8')
  console.log(val)
}

console.log('testing')
readFiles()

console.log('i firste happen')
