import BlogPreview from "../components/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    <>
      <main>
        <h1 className="page-title">Blog</h1>
        <div className="blog">
          {blogs.map(
            (blog) => (
              <BlogPreview
                title={blog.title}
                date={blog.date}
                description={blog.description}
                slug={blog.slug}
              />
            ) // This is how we call the component
          )}
        </div>
      </main>
      <footer className="footer">
        © 2023 Angela Chen | All Rights Reserved
      </footer>
    </>
  );
}
