// server.js - A complete, runnable example
import express from "express";
import mongoose from "mongoose";
import { User } from "./mongoose/schemas/user.mjs";

// 1. Configuration
const PORT = 3000;
const MONGO_URI = "mongodb://127.0.0.1:27017/express_db";
// Note: Using 127.0.0.1 is often safer than 'localhost' for IPv4 compatibility.

const app = express();

// 2. Mongoose Connection Logic
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Database connected successfully!");
  } catch (err) {
    // This catch block will execute if the server is down (ECONNREFUSED)
    // or if there are authentication/network issues.
    console.error(
      "❌ MongoDB connection failed. Is the 'mongod' server running?"
    );
    console.error(err.message);
    // Optional: Exit the application if the DB connection fails
    process.exit(1);
  }
};



app.use(express.json());


// 3. Application Startup
app.get("/", (req, res) => {
  res.send("Server is running. Check console for DB connection status.");
});





app.post('/api/users',async(req,res)=>{

const {body} = req;
 const newUser = new User(body);
 try {
  await newUser.save();
  return res.status(201).send(newUser);
  

 }catch(err){
    console.log(err)
console.log(newUser,'new user')
console.log(req, 'here')


    return res.status(400).send(err);
 }



})






















// Start the server and connect to the DB
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
};

startServer();

// Note: To run this file, you must have 'express' and 'mongoose' installed:
// npm install express mongoose
// And make sure you are running 'mongod' in a separate terminal window.
