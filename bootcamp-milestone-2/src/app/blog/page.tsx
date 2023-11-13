import styles from './page.module.css'
import "@/app/global.css"
import blogs from "@/app/blogData";
import BlogPreview from "@/app/components/blogPreview";


export default function Resume() {
  return (
    <div>
  <main>

    <main className="main">
        <div className="content" id="blog">
            <ul id="blog-list" className="blog-list"></ul>
        </div>
    </main>
    <h1 className="page-title">MY BLOG</h1>
    Hello Guys! This is my blog.
  </main>

  {blogs.map((blog) => (
        <BlogPreview // This is how we call the component
          title={blog.title}
          description={blog.description}
          date={blog.date}
          image={blog.image}
          //text={blog.text}
          slug={blog.slug}

        />
      ))}

    <script src = "./src/blog.js"> </script>

    <footer className="footer">
        © 2023 Aryan Baldua's Personal Website Name | All Rights Reserved
    </footer>
  </div>
  )
}
