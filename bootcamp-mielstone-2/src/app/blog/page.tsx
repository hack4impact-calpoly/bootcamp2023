import React from "react";
import globals from '../globals.module.css';

function Blog(){
    return(
    <main>
        <div className="pg-title">
            <h1>Blog</h1>
        </div>
        <div id="blog-list-container" className="blog-container">
        </div>
    </main>
    )
}

export default Blog;