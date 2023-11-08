import React from 'react';
import BlogPreview from '../components/blogPreview';
import { blogs } from './blogData';
import '../../../styles.css';

export default function BlogList() {
  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogPreview key={index} {...blog} />
      ))}
    </div>
  );
}
