import React from "react";
import BlogPreview from '@/components/blogPreview';
import blogs from "../blogData";
export default function Blog() {
    return(
        <div>
            {blogs.map(blog => 
                <BlogPreview/> 
            )}
        </div>
        
    )

}