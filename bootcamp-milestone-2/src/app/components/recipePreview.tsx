import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './recipePreview.module.css';
import { Blog } from './blog';

interface BlogPreviewProps {
  blog: Blog;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ blog }) => {
  return (
    <div className={Styles.postPreview}>
      <h3 className={Styles.postTitle}>{blog.name}</h3>
      <div>
        <Image src={blog.image} alt="Blog Image" width={500} height={500} />
        <p className={Styles.postDescription}>{blog.description}</p>
        <p>Posted on {blog.posted}</p>
        <Link href= {`/${blog.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;