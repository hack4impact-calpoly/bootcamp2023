import blogs from "../../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Home() {
  return (
    <main className="blogMain">
      <div className="blogsHolder">
        <h1 className="page-title">My Blog Posts!</h1>
        <div className="blogContent">
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
      </div>
    </main>
  );
}
