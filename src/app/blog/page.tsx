import blogs from '@/app/blogData';
import React from 'react'
import BlogPreview from '@/components/blogPreview';

export default function Blog() {
    return ( 
        <>
        {blogs.map(blog => 
            <BlogPreview
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
            slug={blog.slug}
            /> // This is how we call the component
        )}
   
    <div>
<html>
    <title>Blogs</title>
    <main>
      <title>title thing</title>
      <div className="indivblog"></div>
    </main>
</html>

<script src="/Users/sophia/Desktop/scH4I/mywebh4i/bootcamp-milestone-2/src/app/blogData.ts"></script>

</div> </>)
}