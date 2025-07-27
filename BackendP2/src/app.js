import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORSE_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//routes import
import userRouter from "./routes/user.routes.js";

//routes decleration
app.use("/api/v1/users", userRouter);

//example http://localhost:8000/api/v1/users/register

// app.listen(3000,()=>{
//   console.log('server started http://localhost:3000')
// })

export default app;
