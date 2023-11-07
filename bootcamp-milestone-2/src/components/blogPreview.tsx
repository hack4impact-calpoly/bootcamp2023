import React from 'react';
import style from './blogPreview.module.css';
import Image from 'next/image';
import type { Blog } from '@/app/blogData';

export default function BlogPreview(props:Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <header>
        <div className={style.post_preview}>
            <h3>{props.title}</h3>
            <div>
                <p>{props.description}</p>
                <p className={style.blog_date}>{props.date}</p>
            </div>
        </div>
    </header>
  );
}