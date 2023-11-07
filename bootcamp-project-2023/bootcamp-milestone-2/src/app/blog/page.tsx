import blogs from "../../blogData";
import BlogPreview from "../../components/blogPreview";

export default function Home() {
  return (
    <main>
      <h1 className="page-title">Blog</h1>
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
    </main>
  );
}
