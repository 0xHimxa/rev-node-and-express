import express from "express";

const app = express();

// in other for us to be able to use post and other we need to
//use this here

app.use(express.json());

//check more about app.use = use for make stuffs globally before and route is called

//Middleware

//note always add next wen done
const logging = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);

  // the next tell em to move to the other fn in the route
  next();
};


// we can pass many middle ware to app.use as well
//app.use(logging);
//can also call it in route direct

// good practie to always  /api/name


//note we can just create a middleere and pass it belowe instead of creating a fn in the route
//note we can pass data between middleware by attcing it it to the req object eg: req.username = himxa
//in the other middleware you distruce it

app.get("/",logging, (req, res) => {
  res.send({ name: "himxa" });
});
