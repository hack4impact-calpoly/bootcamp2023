import React from "react";
import "../../../styles/styles.css"
import BlogPreview from "@/components/blogPreview";
import { blogs } from "./blogData";

export default function Blog() {
    return(
        <div>
            <main>
                {blogs.map((blog, index) => (
                    <BlogPreview key={index} {...blog}/>
                ))}
            </main>
        </div>
    );
}