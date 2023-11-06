import BlogPreview from '../components/blogPreview';
import blogs from '../blogData';

export default function Blog() {
    return (  
    <>
    <h1 className="page-title"> Blog</h1> 
    <div className="post"> 
    
    {blogs.map(blog => 
      <BlogPreview 
      title={blog.title}
      description={blog.description}
      image={blog.image}
      date={blog.date}
      slug={blog.slug}
      /> 
      )}
    </div> 
    </>
    )
}   