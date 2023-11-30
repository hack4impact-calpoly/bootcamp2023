import BlogPreview from "../../components/blogPreview";
import getBlogs from "../../lib/getBlogs";

export default async function Home() {
  const blogPosts = await getBlogs();

  return (
    <main>
      <div className="blogsHolder">
        <h1 className="page-title">My Blog Posts!</h1>
        {/* Only renders the blog posts if blog data retrieved successfully*/}
        {blogPosts && blogPosts.length > 0 && (
          <div className="blogContent">
            {blogPosts.map((blog) => (
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
        )}
        {/* If blogPosts is null, display error message.*/}
        {!blogPosts && (
          <div className="blogContent">
            <p className="noBlogs">There was an issue loading blog content.</p>
          </div>
        )}
      </div>
    </main>
  );
}
