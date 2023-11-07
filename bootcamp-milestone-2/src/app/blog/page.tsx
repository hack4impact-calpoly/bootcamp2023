import styles from './page.module.css'
import "@/global.css";
import Link from 'next/link';
import "@/app/full.css" 

export default function Contact() {
  return (
    <div>
        <main>
            <main className="main">
                
                <div className="content" id="blog">
                    <ul id="blog-list" className="blog-list"></ul>
                </div>
            </main>
            <h1 className="page-title">MY BLOG</h1>
            Hello World! This is my blog.
            <div className="container" id="container"></div>
        </main>
        <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
        <script src="./src/blog.js"></script>
    </div>
  )
}