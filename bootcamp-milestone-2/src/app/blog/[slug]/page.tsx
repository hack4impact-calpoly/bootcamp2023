import Blog from "@/components/blog";
import blogs from "@/app/blogData";

export default function BlogPost({ params}: { params: Record<string, string>}) {
  const slug = params.slug;
  const blog = blogs.find(blog => blog.slug === `/blog/${slug}`);
  return blog !== undefined ? (
    <Blog blog={blog}></Blog>
  ) : <div>No such blog exists</div>;
}