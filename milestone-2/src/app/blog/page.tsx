import React from "react";
import BlogPreview from '@/app/components/blogPreview';
import blogs from "../blogData";

export default function Blog() {
    return(
        <div>
            {blogs.map(blog => 
                <BlogPreview  {...blog} />
		    )}
        </div>
        
    );

}