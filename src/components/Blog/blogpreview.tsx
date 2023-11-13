import React from 'react';
import blogs from '@/components/Blog/blogs'; 
import Style from '@/components/Blog/blog.module.css'
import Link from 'next/link';

const BlogSection: React.FC = () => {
  return (
    <section className={Style.blogContainer}>
          {blogs.map((blogs, index) => (
          <div key={index} className={Style.blog}>
            <h2 className={Style.blogTitle}>{blogs.title}</h2>
            <p className={Style.blogDate}>{blogs.date}</p>
            <p>{blogs.description}</p>
            <Link href={blogs.urlLink} className={Style.blogLink}>
            Read More
            </Link>
          </div>
        ))}
        </section>
  );
};

export default BlogSection;
