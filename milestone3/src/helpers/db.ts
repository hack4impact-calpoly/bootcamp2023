// db.ts
import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
async function connectDB() {
    try {
        if (!connection) {
            console.log("start");
            connection = await mongoose.connect(`${process.env.MONGO_URI}`);
            console.log("end");
            return connection;
        }
    } catch (err) {
        console.log("ERRORED ON CONNECT DB");
        console.error(err);
    }
}

export default connectDB;
