import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect("mongodb+srv://godprogrammer:xSxmiEPahogdEheJ@cluster0.xvl3yuh.mongodb.net/portfolioDB?retryWrites=true&w=majority");
    return connection;
  }
};

export default connectDB;