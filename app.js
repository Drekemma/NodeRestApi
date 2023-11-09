const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("inside the home");
});

// import the routes
const userRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);

mongoose.connect(process.env.DB_CONNECTION);

app.listen(5000, () => console.log("Listening to the port 5000"));
