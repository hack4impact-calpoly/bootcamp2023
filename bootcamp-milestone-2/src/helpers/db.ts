// db.ts
import mongoose from "mongoose";
//require('dotenv').config();

const url: string = process.env.MONGO_URI as string;
console.log(url)
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
};

export default connectDB;

