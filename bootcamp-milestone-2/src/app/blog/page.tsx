import BlogEntry from "../components/blog";
import blogs, {
  Blog,
} from "/Users/kellybecker/Desktop/Hack4Impact/bootcamp-project-2023/bootcamp-milestone-2/src/app/blogData";
import "../globals.css";

export default function Blog() {
  return (
    <div>
      {blogs.map((blog: Blog) => (
        <BlogEntry // This is how we call the component
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
