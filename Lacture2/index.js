const express = require("express");
require("dotenv").config();

const app = express();
// const port = 3000;

const data = { firstName: "John", lastName: "Doe" };

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.json([
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" },
  ]);
});
app.get("/twiter", (req, res) => {
  res.send(`hello how are you ?
      <h1>hello how are you.....</h1>
      `);
});

app.listen(process.env.PORT, () => {
  console.log(
    `Example app listening on port http://localhost:${process.env.PORT}`
  );
});
