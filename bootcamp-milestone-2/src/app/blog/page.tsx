import Link from "next/link";
import blogs from '@/app/blogData';
import BlogPreview from '@/app/components/blogPreview'

export default function Blog() {
    return (
    <div>
    <main>
        <h1 className="page-title">My Blog!</h1>
        <p>Hello! Welcome to my blog!</p>
    </main>
    <div>
        {blogs.map(blog => 
            <BlogPreview
            
            title={blog.title}
            date={blog.date}
            description={blog.description}
            slug={blog.slug}

            />
        )}
    </div>
    </div>
    )
}

