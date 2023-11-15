import Image from 'next/image'
import styles from './page.module.css'
import blogs from './blogData'
import BlogPreview from '@/components/blogPreview'
import './globals.css';

export default function Home() {
  
  return (
    <div>
      <main className="index-main">
        <h1 className="index-title">Hello World!</h1>  
        <div className="about">      
          <div className="about-text"> 
            <p>My name is <strong>Melika</strong> and this is my cozy little corner of the internet.
            <br></br>
            I'm a junior computer science student at Cal Poly interested in full-stack development,<br></br>
            and I recently transferred from Santa Barbara City College.<br></br>
            I was born and raised in Iran and in fact lived there my <em>entire</em> life - until 2 years ago, <br></br>
            though it may be hard to tell by my accent (or lack thereof?)<br></br>
            You can learn more about me on my blog page!
            </p>
            {blogs.map(blog => <BlogPreview
                  id = {blog.id}
                  title={blog.title}
                  date={blog.date}
                  description={blog.description}
                  slug={blog.slug}
            />)}
            <p>Welcome to my website! Grab a cookie on your way out.</p>
            
          </div>  
        </div>             
      </main>
      <br /><br />
    </div>
  )
}
