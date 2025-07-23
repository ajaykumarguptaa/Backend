import mongoose from "mongoose";

const CatogerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", CatogerySchema);
