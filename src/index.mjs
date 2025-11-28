import express from "express";
import session from "express-session";
import passport from "passport";
import userInfos from "./passport/mock.mjs";
import '../src/passport/local-stratigy.mjs'
const app = express();

// in other for us to be able to use post and other we need to
//use this here

app.use(express.json());

app.use(
  session({
    secret: "make this private key secure like hell",
    resave: false,
    //this useful wen a  we have store and auth state for now put to fals

    //if this is true every time a user enter out site it will create session even tho is has notting and take space
    saveUninitialized: false,

    //check more about this val the cooke accept
    //httpOnly: true, sameSite: 'lax', ecure: false
    cookie: { maxAge: 60000 },
  })
);

app.use(passport.initialize())
//this palce connect session with passport
 app.use(passport.session())

// the passport.authenticate accept the name of the strategy we are using
app.post('/api/auth',passport.authenticate('local'),(req,res)=>{

  res.send({msg:'success'}).status(200)
})




app.get('/api/auth/status',(req,res)=>{
// the deceralid attach the user to the req if they are loginin

req.user? res.send(req.user): res.sendStatus(401)


})

// to loguot the user we simple do this
app.post('/api/auth/logout',(req,res)=>{
 if(!req.user) return res.sendStatus(401  )
  req.logout((err)=>{
if(err) return res.sendStatus(400)
  res.sendStatus(200)
  return ;
})
// {
//   "username":"himxa",
//   "password":123456
// }

})









//check more about app.use = use for make stuffs globally before and route is called

app.get("/", (req, res) => {
  console.log('hello boby')
  //console.log(req.session);

  //console.log(req.session.id);
  // we add this line so we can tracked each user session
  //else it will just be creating new sesion id every time user make req

  //from here any user that enter start tracking
  // the momemtn we modifie the sesion it start tract most not have to be verified can be userinfo check blow
  //req.session.visited = true

  res.send({ name: "himxa" });
});

app.get("/users", (req, res) => {
  console.log(req.session);

  console.log(req.session.id);

  // not to get the session info  for a perticular req
  //use use the get with callback

  req.sessionStore.get(req.session.id, (err, sessionData) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(sessionData);
  });

  res.send(userInfos);
});

app.post("/login", (req, res) => {
  const {
    body: { username, password },
  } = req;
  console.log(username, password);

  const findUser = userInfos.find(
    (user) => user.username === username && user.password === Number(password)
  );

  if (!findUser || findUser.password !== Number(password)) {
    return res.status(401).send({ msg: "invalid credentials" });
  }

  // from here it create a seasion and save it start tracking again

  req.session.user = findUser;
  return res.status(200).send(findUser);
});

app.get("/auth", (req, res) => {
  // all the info is been store in this seasion store in here

  req.sessionStore.get(req.session.id, (err, sessionData) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(sessionData);
  });

  // we can access the cookie value like we did below
  return req.session.user
    ? res.status(200).send(req.session.user)
    : res.status(401).send({ msg: "not authenticated" });
});

app.listen(3000, () => {
  console.log("runing mee");
});
