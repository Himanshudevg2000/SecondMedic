const express = require("express");

const app = express();

const bodyparser = require("body-parser");
const cors = require("cors");

const port = 5000;

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task")
.then(()=> {
    console.log("db connected")
}).catch(err=> console.log("some err"))


const userRoutes = require("./routes/userRoutes")

app.use(bodyparser.json());
app.use(cors());

app.use(userRoutes)

app.listen(port, ()=> {
    console.log("app started");
})