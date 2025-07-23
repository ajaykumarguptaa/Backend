import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: [
      {
        name: {
          type: String,
          required: true,
        },
        designation: {
          type: String,
          require: true,
        },
      },
    ],
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);
