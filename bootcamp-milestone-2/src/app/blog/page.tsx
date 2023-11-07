import blogs from '@/app/blogData';
import BlogPreview from '../components/blogPreview';


export default function Blog() {
      return(
            <div>
            <h1 className="page-title">My Blogs</h1>
            <main>
                  {blogs.map(blog => 
                        <BlogPreview 
                        title={blog.title}
                        date={blog.date}
                        description={blog.description}
                        slug={blog.slug}
                        />
                  )}
            </main>
            </div>
      )
}

