import Image from 'next/image'
import '../globals.css'
import blogs from '../blogData';
import BlogPreview from '@/components/blogPreview';

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