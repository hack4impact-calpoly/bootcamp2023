import { IBlog } from "@/database/blogSchema";

interface BlogComponentProps{
    blog: IBlog;
}


function BlogComponent({ blog }: BlogComponentProps) {
    return (
      <div className="blog-post">
        <h2>{blog.title}</h2>
        <p>{new Date(blog.date).toLocaleDateString()}</p>
        <p>{blog.description}</p>
        <a href={blog.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    );
  }

export default BlogComponent;