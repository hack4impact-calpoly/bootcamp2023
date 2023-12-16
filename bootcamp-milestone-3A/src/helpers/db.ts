// db.ts
import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    try {
      //connection = await mongoose.connect(url);
      connection = await mongoose.connect(url); // Specify the database name here

      console.log('Connected to MongoDB.');
      return connection;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      //throw error;
    }
  }
};

export default connectDB;