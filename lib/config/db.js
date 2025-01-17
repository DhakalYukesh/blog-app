import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async () => {
    await mongoose.connect(process.env.DB_STRING);
    console.log("Database Connected!");
}