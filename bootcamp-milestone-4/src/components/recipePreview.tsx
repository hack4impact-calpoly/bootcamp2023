import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Styles from './recipePreview.module.css';


export default function BlogPreview({ blog }: any){
  return (
    <div className={Styles.postPreview}>
      <h3 className={Styles.postTitle}>{blog.name}</h3>
      <div>
        <Image src={blog.image} alt="Blog Image" width={500} height={500} />
        <p className={Styles.postDescription}>{blog.description}</p>
        <p className={Styles.postedInfo}>Posted on {blog.posted}</p>
        <Link href= {`/blog/${blog.slug}`}>
          <p className={Styles.readMoreLink}>Read More</p>
        </Link>
      </div>
    </div>
  );
};