import React from 'react';
import style from './blogPreview.module.css';
import Link from 'next/link';
import { IBlog } from '@/database/blogSchema';

export default function BlogPreview(props: IBlog) {
    return (
        <div className={style.blogPreview}>
            <h1>{props.title}</h1>
            <h3>Date: {props.date.toDateString()}</h3>
            <p>{props.description}</p>
            <Link href={props.slug}><u className={style.blogLink}>Read More</u></Link>
        </div>
    );
}
