import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData";

export default function Home() {
  return (
    <div>
      {blogs.map((blog) => (
        <BlogPreview {...blog} />
      ))}
    </div>
  );
}
