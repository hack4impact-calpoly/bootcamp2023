// You can name the function within page.tsx anything you want.
import Link from "next/link";
import { Blog } from "@/app/blogData";
//import blogs from "@/app/blogData";
import BlogPreview from "@/components/blogPreview"
import Navbar from "@/components/navbar";
import { JSX, useEffect, useState } from "react";


export default function Home() {
    //const [blogs, setBlogs] =  useState<null | Promise<any>>(null); 

  return (<div>
    <html>
          <head>
              <title>
                  Keila's website
              </title>
              <link rel="stylesheet" href="styles.css" />
          </head>
          <body>
              <nav className="navbar">
                {<Navbar/>}
              </nav>
              <main>
                  <h1>hello world!</h1>
                  <div className="about">
                      <div className="about-text">
                          <p>Welcome! My name is Keila and I am a computer science student at 
                              California Polytechnic State University, San Luis Obispo.</p>
                              <p>
                              <em>I have a deep love and passion for the art of programming!</em>
                              During my freetime (and when school permits) I enjoy spending time with my friends, playing the guitar, listening to music, reading,
                              meeting new people, traveling, and hanging out with my family.
                          </p>
                          <p><strong>Feel free to browse my website!</strong></p>
                      </div>
                      </div>
              </main>
              <footer> © 2023 Keila's Website | All Rights Reserved</footer>
          </body>
          </html>
			</div>);
}