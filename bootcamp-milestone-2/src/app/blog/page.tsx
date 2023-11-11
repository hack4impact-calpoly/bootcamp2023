import style from '../home.module.css';
import "../global.css";
import Link from "next/link";
import BlogPreview from '@/components/blogPreview';
import blogs from '../blogData';

export default function Resume() {
  return (
    <div>

        <main>

            <div className={style.footer}>
                <footer>
                © 2023 My Personal Website | All Rights Reserved | Made with love ♥
                </footer>
            </div>
        </main>
        <script src="./blog.js"></script>
        {blogs.map((blog) => (
        <BlogPreview // This is how we call the component

        title={blog.title}
        image={blog.image}
        date={blog.date}
        description={blog.description}
        slug={blog.slug}
    />
  ))}
    </div>
      );
    }