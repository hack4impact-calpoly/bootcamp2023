import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import blogs from "@/blogData";
import BlogPreview from "../components/blogPreview";
// import blogs from '@/blogData';
// import BlogPreview from '../components/blogPreview';
// import blogs from "blogData.ts";
// import BlogPreview from "@/components/blogPreview";

export default function Blogs() {
  <Link href="/page.tsx"></Link>;
  return (
    <>
      <nav className="navbar">
        <h1 className="Leila">
          <a href="/page.tsx"> personal website </a>{" "}
        </h1>
        <ul className="nav-list">
          <Link href="/page.tsx"> Home |</Link>
          <Link href="/blogs"> Blog |</Link>
          <Link href="/portfolio"> Portfolio |</Link>
          <Link href="/resume"> Resume |</Link>
          <Link href="/contact"> Contact </Link>
        </ul>
      </nav>
      <main>
        <h1 className="page-title"> Blog </h1>

        <div id="blog">
          <ul id="blog-list" className="blog-list">
            {" "}
          </ul>
        </div>
        {blogs.map((blog) => (
          <BlogPreview
            name={blog.name}
            description={blog.description}
            image={blog.image}
            posted={blog.posted}
            text={blog.text}
          />
        ))}
      </main>
      <footer className="footer">
        {" "}
        © 2023 Leila's World | All Rights Reserved{" "}
      </footer>
    </>
  );
}
