import Blog from "@/database/blogSchema";
import connectDB from "@/helpers/db";

export default async function GET(request, res) {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    console.log('All blogs:', blogs);
    res.status(200).json({ blogs });;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
}