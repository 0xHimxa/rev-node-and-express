
const {readFileSync,writeFileSync,readFile,writeFile, read} = require('fs')


const path = require('path')

//we join the dir path with part we want to visit
const visit_path = path.join(__dirname,'test.txt');

// syc methoad

 //const test = readFileSync(visit_path, 'utf8')

 //console.log(test)

 const create_path = path.join(__dirname,'f-create.txt');

// to apppend the file add flage a 

 //writeFileSync(create_path,'i just created my first file wow',{flag:'a'})




 //async methode
  const readed_val = readFile(visit_path,'utf8',(err,res)=>{
if(res) return console.log(res)

console.log(err,'cant read file')

 })



 writeFile(create_path,'yo fame it working',(err,res)=>{
if(res) return console.log(res)

console.log(err,'faild to write')

 })
