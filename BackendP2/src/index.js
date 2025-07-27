// import { app } from "./app.js";
import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

// Corrected dotenv path (if using `.env`)
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        ` server started.... at port no http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  });
