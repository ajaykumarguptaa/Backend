import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      unique: true,
    },
    complete: {
      type: String,
      require: true,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  },
  { timestamps: true }
);

export const SUBTODO = mongoose.model("SUBTODO", subTodoSchema);
