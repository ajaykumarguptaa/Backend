import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      unique: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      //array standerd prective
      {
        //object
        type: mongoose.Schema.Types.ObjectId,
        ref: "SUBTODO",
      },
    ], //Array pf sub todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
