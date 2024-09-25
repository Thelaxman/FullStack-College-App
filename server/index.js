const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection established"))
  .catch((err) => console.log("not connected", err));

//middleware

app.use(express.json()); //sending the data to the server in JSON format
app.use(cookieParser());
app.use(express.urlencoded({ extended: false })); //

app.use("/", require("./routes/AuthRoutes"));

const port = 8030;
app.listen(port, () => console.log(`Server is listening on ${port}`));
