import express from "express";

const app = express();

// in other for us to be able to use post and other we need to
//use this here

app.use(express.json());

//check more about app.use = use for make stuffs globally before and route is called

//Middleware






app.get("/", (req, res) => {
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



app.listen(3000, () => {
  console.log("runing");
});
