import React from "react";
import BlogPreview from '@/app/components/blogPreview';
import blogs from "../blogData";

export default function Blog() {
    return(
    <main>
        <h2 className="page-title">Blogs</h2>
        <div>
            {blogs.map(blog => 
                <BlogPreview  {...blog} />
		    )}
        </div>
    </main>
        
    );

}