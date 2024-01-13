import Blog from "@/database/blogSchema";
import connectDB from "@/helpers/db";

export default async function handler(req, res) {
  const { slug } = req.query;

  await connectDB();

  try {
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    console.log('Single blog:', blog);
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}