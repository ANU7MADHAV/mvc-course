import mongoose from "mongoose";
import { ATLAS_DB_URL } from "./server.config";

const connectDb = async () => {
  try {
    await mongoose.connect(ATLAS_DB_URL);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
