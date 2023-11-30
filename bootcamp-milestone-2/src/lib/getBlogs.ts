import connectDB from "@/db";
import IBlog from "../database/blogSchema";

//fetches the blogs from the Database
async function getBlogs() {
  await connectDB(); // function from db.ts before
  try {
    // query for all blogs and sort by date
    const blogs = await IBlog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default getBlogs;
