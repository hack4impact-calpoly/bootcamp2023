import connectDB from "@/helpers/db";
import mongoose, { Schema } from "mongoose";

type IBlog = {
  name: string;
  slug: string;
  description: string;
  image: string;
  posted: Date;
  text: string;
};

const blogSchema = new Schema<IBlog>({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  posted: { type: Date, required: true },
  text: { type: String, required: true },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}