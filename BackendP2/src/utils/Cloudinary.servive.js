import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // handling path
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.Cloudinary_CLOUD_NAME,
  api_key: process.env.Cloudinary_API_KEY,
  api_secret: process.env.Cloudinary_API_SECRET, // click 'view Api' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return "File Path Not found";
    //upload coudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    console.log("file uploaded on Cloudinary...", response.url);
    return response.url;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved tamporary file as the upload operation got failed.

    return null;
  }
};

export { uploadOnCloudinary };
