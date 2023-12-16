import Blog from "@/database/blogSchema";
import Comment from "@/database/blogSchema";
import styles from "./blog.module.css";
import connectDB from "@/helpers/db";
import BlogPreview from "../../../components/blogPreview";

async function getBlogs() {
  await connectDB();
  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    console.log('All blogs:', blogs);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
}

export default async function blog() {
  const blogs = await getBlogs();
  if (blogs) {
    return (
      <div>
        <main style={{textAlign: 'center'}}>
          <h1 style={{textDecoration: 'underline'}}>Welcome to my Blog</h1>
          <div id="blog-posts" style={{margin: '50px;'}}></div>
        </main>
        {blogs.map((blog) => 
          <BlogPreview 
            {...blog.title} 
            date={blog.date} 
            description={blog.description} 
            image={blog.image}
            slug={blog.slug}
            comments={blog.comment}/>
            //comments={blog.comments.map((comment) => )}/>
        )}
      </div>
    );
  }
}
