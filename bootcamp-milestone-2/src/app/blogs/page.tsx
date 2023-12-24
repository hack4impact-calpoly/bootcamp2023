import "../../global.css";
import Link from "next/link";
import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";
import Blog from "./[slug]/page";
import style from '@/app/home.module.css';

export default function Resume() {
  return (
    <div>
      <main>
        {blogs.map((blog) => (
          <BlogPreview // This is how we call the component
            title={blog.title}
            date={blog.date}
            description={blog.description}
            image={blog.image}
            slug={blog.slug}
            content={blog.content}
            comments={blog.comments} save={function (): unknown {
              throw new Error("Function not implemented.");
            } }          />
        ))}

        <div className={style.footer}>
          <footer>
            © 2023 My Personal Website | All Rights Reserved | Made with love ♥
          </footer>
        </div>
      </main>
      <script src="./blog.js"></script>
    </div>
  );
}
