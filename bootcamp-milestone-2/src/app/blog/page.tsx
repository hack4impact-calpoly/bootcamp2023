import Image from 'next/image'
import '../globals.css'
import blogs from '../blogData';
import BlogPreview from '@/components/blogPreview';
import connectDB from '@/helpers/db';
import Blog from '@/database/blogSchema';

async function getBlogs() {
    await connectDB() // function from db.ts before

    try {
        // query for all blogs and sort by date
        const blogs = await Blog.find().sort({ date: -1 }).orFail()
        // send a response as the blogs as the message
        return blogs
    } catch (err) {
        return null
    }
}
// You can name the function within page.tsx anything you want.
export default function Home() {
  return (<div>
            <h1 className="page-title">Blog</h1>
              <main>
                {blogs.map(blog => 
                        <BlogPreview 

                        title={blog.title}
                        description={blog.description}
                        date={blog.date}
                        slug={blog.slug}
                      />
                )}
              </main>
</div>) 
}