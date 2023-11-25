import React from 'react';
import style from './blogPreview.module.css';
import { Blog } from '@/app/blog/blogData';
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
    return (
        <div className={style.blogPreview}>
            <h1>{props.title}</h1>
            <h3>Date: {props.date}</h3>
            <p>{props.description}</p>
            <Link href={props.slug}><u className={style.blogLink}>Read More</u></Link>
        </div>
    );
}