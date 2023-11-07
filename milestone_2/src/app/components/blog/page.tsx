import styles from './page.module.css'
import blogs from '../../blogData';
import BlogPreview from '../blogPreview';



export default function Blog() {
  return (

  <div className={"about"}>
    <h1 className="page-title">Blog</h1>

    {blogs.map(blog => 
      <BlogPreview 
      
      title={blog.title}
      description={blog.description}
      //image={blog.image}
      date={blog.date}
      slug={blog.slug}
      /> 
		)}
  </div>)
}