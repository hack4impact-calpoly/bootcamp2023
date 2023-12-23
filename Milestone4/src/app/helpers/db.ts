import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
dotenv.config();
let uri = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  if (!connection) {
    connection = await mongoose.connect(uri);
    return connection;
  }
};

export default connectDB;