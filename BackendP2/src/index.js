import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8001, () => {
      console.log(`server Started... http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo db Connction Failed : ", error);
  });
