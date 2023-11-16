import dotenv from 'dotenv';
import mongoose from 'mongoose'; 
require('dotenv').config();
const url: string = "mongodb+srv://mattbosio08:m5IHxuXiRi5A7Wl4@cluster0.kclhzpm.mongodb.net/BlogDB?retryWrites=true&w=majority";
//process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect("mongodb+srv://mattbosio08:4EiVwECNw5Oaf04n@cluster0.kclhzpm.mongodb.net/BlogDB?retryWrites=true&w=majority");
    return connection;
  }
};

export default connectDB;