import BlogPreview from "@/components/BlogPreview/BlogPreview";
import { blogs } from "../data/blogData";

export default function Blogs() {
  return (
    <main>
      <ul>
        {blogs.map((blog) => {
          return (
            <li key={blog.slug}>
              <BlogPreview title={blog.title} content={blog.content} date={blog.date} img={blog.img} slug={blog.slug} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
