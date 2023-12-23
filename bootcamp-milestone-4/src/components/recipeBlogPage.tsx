import React from 'react';
import Image from 'next/image';
import styles from './recipeBlogPage.module.css';


export default function BlogPage({blog}: any) {
  return (
    <div className={styles.blogPage}>
      <div>
        <h1 className={styles.blogTitle}>{blog.name}</h1> 
      </div>
        <h2 className={styles.blogDate}>{blog.posted}</h2>
        <Image src={blog.image} alt="Blog Image" width={500} height={500} />
        <p className={styles.blogContent}>{blog.text}</p>
    </div>
  );
};