import express from 'express';

 const app = express();


// in other for us to be able to use post and other we need to 
//use this here
 app.use(express.json())

app.get('/',(req,res)=>{

   res.send({name:'himxa'})

})


 // good practie to always  /api/name
// to create a route that accept id we do

 app.get('/api/user/:id',(req,res)=>{

   const {id} = req.params
   const userId = Number(id)
   console.log(userId)
  if(isNaN(userId)) return res.status(400).send([{msg:'incorrest info'}])
return res.send({info:'correct'})
 })








const userInfos = [{
   username: 'himxa',age:14,
   id: 1
},{
   username:'nabill',
   age:17,
   id:2
},{
   username: 'maka',
   age: 35,
   id:3
}]


//query key are value been pasd to the url to us eg
// user/?key1=val1&key2=val2 

// note the param are optional if they are pass to us
//it the frontend that will asign value to key

//to get it out we use req.query to check and see


 app.get('/api/users',(req,res)=>{
   const {query:{filter,val}} = req




   //to send stufss use.send, to sent sattus use status
  return res.status(200).send(userInfos)
   
 })



 //post request

 app.post('/api/users',(req,res)=>{
const {name,age} = req.body
   
userInfos.push({username:name,age})
return res.status(201).send(userInfos)
 })



//put methode is use for updating and entire user info in the db
//if all the details are not provided it will sent them to null in db


app.put('/api/users/:id',(req,res)=>{
const {body,params} = req
const userId = parseInt(params.id)

if(isNaN(userId)) return res.status(400).send([{msg:'incorrest info'}])

const findUserIndex = userInfos.findIndex(user=> user.id === userId)

if(findUserIndex === -1) return res.status(404).send([{msg:'user not found'}])

   userInfos[findUserIndex] = {id: userId,...body}
return res.status(200).send({id:userId,...body})



})



//patch is use for updating specific  user details eg just username




app.patch('/api/users/:id',(req,res)=>{

const {body,params} = req
const userId = parseInt(params.id)

if(isNaN(userId)) return res.status(400).send([{msg:'incorrest info'}])

const findUserIndex = userInfos.findIndex(user=> user.id === userId)

if(findUserIndex === -1) return res.status(404).send([{msg:'user not found'}])

   userInfos[findUserIndex] = {...userInfos[findUserIndex],...body}
return res.status(200).send({...userInfos[findUserIndex],...body})




})







//delete is use for deleting






 app.listen(3000,()=>{
    console.log('runing')
 })