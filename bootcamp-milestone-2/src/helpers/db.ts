// db.ts
import * as mongoose from "mongoose";

const uri: string | undefined = process.env.MONGO_URI;
let connection: typeof mongoose;

if (!uri) {
  console.error(
    "MongoDB URI is not provided. Set the MONGO_URI environment variable."
  );
  process.exit(1); // Exit the process if MongoDB URI is not set
}

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!connection) {
    connection = await mongoose.connect(uri);
    return connection;
  }
};

export default connectDB;
