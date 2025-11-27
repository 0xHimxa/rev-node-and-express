import express from "express";

import session from "express-session";


const app = express();

// in other for us to be able to use post and other we need to
//use this here

app.use(express.json());

app.use(session({
  secret: 'make this private key secure like hell',
  resave: false,
  //this useful wen a  we have store and auth state for now put to fals
  saveUninitialized:false,

  //check more about this val the cooke accept
  //httpOnly: true, sameSite: 'lax', ecure: false
  cookie: {maxAge: 60000,  },
  
}));









//check more about app.use = use for make stuffs globally before and route is called






app.get("/", (req, res) => {

  console.log(req.session);

console.log(req.session.id);
// we add this line so we can tracked each user session
//else it will just be creating new sesion id every time user make req
  req.session.visited = true

  
  res.send({ name: "himxa" });
});

let userInfos = [
  {
    username: "himxa",
    age: 14,
    id: 1,
  },
  {
    username: "nabill",
    age: 17,
    id: 2,
  },
  {
    username: "maka",
    age: 35,
    id: 3,
  },
];



app.get('/users',(req,res)=>{
console.log(req.session);

console.log(req.session.id);

// not to get the session info  for a perticular req
//use use the get with callback

req.sessionStore.get(req.session.id,(err,sessionData)=>{
 if(err){
  console.log(err);
   throw err
 }
 console.log(sessionData);
 


})




 
  res.send(userInfos)


})


app.listen(3000, () => {
  console.log("runing");
});
