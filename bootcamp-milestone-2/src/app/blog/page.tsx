import BlogPreview from "../components/blogPreview";
import blogs from "../blogData";

const Blog = () => {
  return (
    <div>
      <h1 className="page-title">Favorite Restaurants</h1>
      <div className="blog" id="blog">
        {blogs.map((blog) => (
          // eslint-disable-next-line react/jsx-key
          <BlogPreview
            name={blog.name}
            location={blog.location}
            link={blog.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
