import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();



app.listen(port || 3004, (req, res) => {
  console.log(`server connected http://localhost:${port}`);
});
