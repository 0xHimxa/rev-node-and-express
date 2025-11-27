

import cookieParser from "cookie-parser";

//check more about this add param

// the param is the key we will be using to singn it so we can view it in the server
// client cant view  the value directly if signed 

// client cant view  the value directly if signed 
app.use(cookieParser('signer'))

//check more about app.use = use for make stuffs globally before and route is called






app.get("/", (req, res) => {
  //  we sent a cook once and anytime client make request they always send it back
 //we pass in signed users cant read the value agian
  res.cookie('hello','world',{maxAge: 60000 * 60 * 24, signed:true})
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

  //we need to parse the cookie 
  console.log(req.headers.cookie,'cookie')
  console.log(req.cookies)
  //if we sign the cookies we have to access the value like this now, else it will still be raw
  console.log(req.signedCookies)
if(!req.cookies.hello) return res.send({msg:'sorry you need the right cookies'})
  res.send(userInfos)


})