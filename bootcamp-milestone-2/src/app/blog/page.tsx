import styles from "./page.module.css"
import blogs from "../blogData.ts"
import BlogPreview from '../components/blogPreview';

export default function Blog() { 
    return(
        <>
        <h1>Blog Catalog</h1>
        <div>
        {blogs.map(blog => 
          <BlogPreview 
            {...blog}
            key={blog.slug}
          />
        )}
        </div>
        </>
  )
}
