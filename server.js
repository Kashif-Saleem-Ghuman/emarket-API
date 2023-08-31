// setting server using express now
import express from "express";
import cors from "cors";

// import fs from "fs"; we dont need the whole file syst instead we can destructure just the readdirSync function

import { readdirSync } from "fs";
import morgan from "morgan";
import mongoose from "mongoose";

// import doenv config

import dotenv from "dotenv";
dotenv.config();

// create express app

const app = express(); // when we execute exrpess that entire express app is available in this variable app

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// apply middlewares ( code which runs between request and response)

app.use(cors()); // cors is a middleware which allows to connect to the server from different domain
app.use(express.json()); // express.json() is a middleware which allows to read json data from request body
app.use(morgan("dev")); // morgan is a middleware which logs the request details in the console

//Routes

readdirSync("./routes").map((r) => {
  //apply as middelware now
  app.use("/api", require(`./routes/${r}`));
});

const port = process.env.PORT || 8000; // process.env.PORT is used to get the port number from the .env file and if it is not available then it will use 8000 as default port. Process is a global variable in nodejs which allow us to access the environment variables and other process related information

// start listening to port

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
