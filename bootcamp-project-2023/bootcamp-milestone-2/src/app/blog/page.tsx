import blogs from "../../blogData";
import Blog from "../../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Home() {
  return (
    <div>
      {blogs.map((blog: Blog) => (
        <BlogPreview
          key={blog.slug}
          date={blog.date}
          title={blog.title}
          description={blog.description}
          slug={blog.slug}
          image={blog.image}
        />
      ))}
    </div>
  );
}
