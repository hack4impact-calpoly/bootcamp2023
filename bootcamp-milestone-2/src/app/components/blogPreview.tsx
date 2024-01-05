import React from 'react';
import style from './blogPreview.module.css'
import Link from 'next/link'
import type { Blog } from '@/app/typings/blog'

export default function BlogPreview(props: Blog) {
  return (
      <div className='post-preview'>
            <h2 className="post-title">{props.title}</h2>
            <h3 className="post-subtitle">{props.date}</h3>
            <p className="post-description">{props.description}</p>
            <Link href={`/blog/${props.slug}`}> Read More </Link>
      </div>
  );
}