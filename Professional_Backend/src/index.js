import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.listen(port || 3004, (req, res) => {
  console.log(`server connected http://localhost:${port}`);
});

/*(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(port || 3015, () => {
      console.log(` server Started  http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
})();

// app.get("/", (req, res) => {
//   res.json({ message: "hello how are you..." });
// });
*/
