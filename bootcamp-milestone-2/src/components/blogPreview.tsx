import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { IBlog } from '@/database/blogSchema';

export default function BlogPreview(props: IBlog) {
    return (
        <>
            <div className="blogWrapper">
                <div className={style.div}>
                    <h3> {props.title} </h3>
                    <div>
                        <Image src={`${props.imagePath}`} alt="img" width={500} height={500} ></Image>
                        <p>Blog description {props.description}</p>
                        <p>Posted on {props.date.toString()}</p>
                        <Link className="readMore" href={`/blog/${props.slug}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
}