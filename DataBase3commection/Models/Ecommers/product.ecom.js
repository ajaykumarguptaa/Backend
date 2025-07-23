import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    discreption: {
      type: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    stocks: {
      default: 0,
      type: Number,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);
