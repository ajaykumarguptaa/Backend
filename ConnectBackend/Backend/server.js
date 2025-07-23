import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//get alist of 5 jokes

const jokes = [
  {
    id: 1,
    question: "Why do programmers prefer dark mode?",
    answer: "Because light attracts bugs. 🐛",
  },
  {
    id: 2,
    question: "How many programmers does it take to change a light bulb?",
    answer: "None. That’s a hardware problem. 💡",
  },
  {
    id: 3,
    question: "Why was the JavaScript developer broke?",
    answer: "Because he kept using 'null' as his bank balance. 💸",
  },
  {
    id: 4,
    question: "What do you call 8 hobbits?",
    answer: "A hobbyte. 🧝‍♂️",
  },
  {
    id: 5,
    question: "Why was the function so calm?",
    answer: "Because it had a try-catch block. 😌",
  },
];

app.get("/", (req, res) => {
  res.send("Server is ready..!");
});

app.get("/api/jokes", (req, res, next) => {
  res.send(jokes);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    ` server start at port number http://localhost:${process.env.PORT}`
  );
});
