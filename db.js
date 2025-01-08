/*1*/ const mongoose = require("mongoose");
// /*2*/ const mongoURL = "mongodb://localhost:27017/hotels";

require("dotenv").config();
const mongoURL = process.env.MONGODB_URL; 
// const mongoURL = process.env.MONGODB_URL_LOCAL; 


// Connect to the database without deprecated options
/*3*/ mongoose.connect(mongoURL);



// We'll use this db variable to perform operations on the database
/*4*/ const db = mongoose.connection;



//optional... (below stuff)
db.on("error", () => { console.log("Error connecting to the database"); });
db.on("connected", () => { console.log("Connected to the database"); });
db.on("disconnected", () => { console.log("Disconnected from the database"); });

/*5*/ module.exports = db;
