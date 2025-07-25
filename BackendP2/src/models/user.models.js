import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true, // automatically remove leading and trailing whitespace from a string before saving it to MongoDB.
      index: true, //help to searching field
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String, // cloudnary Url { like aws where you upload video file document etc.}
      required: true,
    },
    coverImage: {
      type: String, //cloudnary Url
    },

    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required..!"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

//bycript the password at the moment that goig to Save....
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // if fild modified then applay bycript if it is note modified then call the next middle ware...
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
//add some method to ask the user the entered passwod is correct or not
// gives mongoose method inject update one delete on but also design some custom method...
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//jesom WebToken it is bearer token, Who bear this token and send this token to the server, server send the data on those user just like a key..

//first write in .env

//they both are jwt token use different
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      // payloads
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET, // replace with your secret key
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY } // example expiration
  );
};
userSchema.methods.generateRefereshToken = function () {
  // Generates a refresh token for the user using JWT
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFERESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFERESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
