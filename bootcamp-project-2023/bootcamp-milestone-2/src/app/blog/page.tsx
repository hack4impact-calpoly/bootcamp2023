import blogs from "../../blogData";
import Blog from "../../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Home() {
  return (
    <div>
      {blogs.map((blog: Blog) => (
        <BlogPreview
          name={blog.name}
          description={blog.description}
          image={blog.image}
          posted={blog.posted}
          text={blog.text}
        />
      ))}
    </div>
  );
}
