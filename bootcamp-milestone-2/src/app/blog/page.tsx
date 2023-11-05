import blogPosts from "@/blogData";
import Image from "next/image";
import BlogPreview from "../../../components/recipePreview";

export default function Blog() {
  const blogs = blogPosts; 
    return (
      <div>
        <main style={{textAlign: 'center'}}>
          <h1 style={{textDecoration: 'underline'}}>Welcome to my Blog</h1>
          <div id="blog-posts" style={{margin: '50px;'}}>
          </div>
        </main>
        {blogs.map(blogs => 
      <BlogPreview {...blogs}/> 
		  )}
      </div>
   )
}