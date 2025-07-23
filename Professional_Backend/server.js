import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello how are you..." });
});

app.listen(port || 3015, () => {
  console.log(` server Started  http://localhost:${port}`);
});
