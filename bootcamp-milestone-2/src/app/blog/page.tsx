import React from 'react';
import blogs from '../blogdata';
import "../globals.css";
import Link from 'next/link';
import BlogPreview from '../components/blogPreview';

export default function Home() {
    return (<main className="container-fluid d-flex flex-column align-items-center">
        <h1><b>Lindsay's College Blog</b></h1>
        <div style={{margin: "0", width: "70%"}}>
            {blogs.map(blog => 
            <BlogPreview {...blog} /> // This is how we call the component
		    )}
        </div>
        
    </main>) 
  }