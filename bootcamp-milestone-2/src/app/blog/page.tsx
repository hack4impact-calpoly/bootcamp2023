import React from "react";
import style from './blogs.module.css'
import blogs from "../blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blogs() {
    return (
        <header>
            <h1 className={style.page_title}>Sameer's Blog</h1>

            {blogs.map(blog => 
                <BlogPreview // This is how we call the component

                {...blog}
                />
            )}
        </header>
        
    );
}