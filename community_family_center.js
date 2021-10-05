const express = require("express"); // setting our express app up
const mongoose = require("mongoose");  // setting up our mongoose library
const morgan = require("morgan"); // setting up morgan library for logging functionality
require("dotenv").config(); // setting up the module that allows the connection string to be read from the .env file
 
const app = express();

// accessing the HTTP request as req.body and logging incoming request to console
app.use(express.json());
app.use(morgan("dev"));

// the database connection set up using mongoose
mongoose
  .connect(process.env.MONGO_URL) // connection string read from .env file
  .then(() => {
    console.log("Connected to MongoDB Successfully!");
  })
  .catch((err) => {
    console.error("Connection Not Successful.", err);
  });

// port through which application will go live
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Community Family Center app live on port:", PORT);
});
