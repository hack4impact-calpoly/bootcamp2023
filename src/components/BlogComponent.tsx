import React from 'react';
import { IBlog } from '@/database/blogSchema';
import style from '@/styles/blog.module.css'

interface BlogComponentProps {
  blogs: IBlog[];
}

const BlogComponent: React.FC<BlogComponentProps> = ({ blogs }) => {
  return (
    <div className={style.blogContainer}>
      {blogs.map(blog => (
        <div key={blog.slug} className={style.blog}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          {/* Render other blog details */}
        </div>
      ))}
    </div>
  );
};

export default BlogComponent;