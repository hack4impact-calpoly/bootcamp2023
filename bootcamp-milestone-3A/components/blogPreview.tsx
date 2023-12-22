import React from 'react';
import style from './blogPreview.module.css';
import Image from 'next/image';
import IBlog from '@/blogData';
import CommentPreview from './commentPreview';

export default function BlogPreview(blog : IBlog ) {
  return (
    <div className={style.blogContent}>
      <h3>{blog.title}</h3>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={blog.image} alt="img" width={500} height={500} />
        </div>
        <p>{blog.description}</p>
      </div>
      <div>
        <h4>Comments:</h4>
        <div>
        {blog.comments && blog.comments.map((comment) => (
          <CommentPreview 
            user={comment.user}
            comment={comment.comment}
            time={comment.time}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

