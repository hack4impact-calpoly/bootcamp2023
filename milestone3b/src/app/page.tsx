import React from 'react';
import '../../styles.css';
import BlogPreview from './components/blogPreview';
import { blogs } from './blog/blogData';

function Page() {
  return (
    <div>
      <head>
        <title>Sammy's Website!</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body className="container">
        <main>
          <h1 className="page-title">Hi! I'm Sammy Paykel</h1>
          <div className="about">
            <div className="about-image">
              <img src="about.jpg" alt="Portrait of Sammy Paykel" width="300" height="400" />
            </div>
            <div className="about-text">
              <p>
                I am a <em>computer science</em> student at Cal Poly in San Luis Obispo. I enjoy solving complex problems and learning new skills. I am <strong>passionate</strong> about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a student and as a software developer.
              </p>
            </div>
          </div>
          {blogs.map(blog => 
            <BlogPreview {...blog} />
		      )}
        </main>
        <footer className="footer">© 2023 Sammy Paykel | All Rights Reserved</footer>
      </body>
    </div>
  );
}

export default Page;
