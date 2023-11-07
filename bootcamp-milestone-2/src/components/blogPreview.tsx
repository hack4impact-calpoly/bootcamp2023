import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import type { Blog } from "@/typings/blog"
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
    return (

        <>

            <div className="blogWrapper"></div>
            <div className={style.div}>
                <h3> {props.title} </h3>
                <div>
                    <Image src={`${props.imagePath}`} alt="img" width={500} height={500} ></Image>
                    <p>Blog description {props.description}</p>
                    <p>Posted on {props.date}</p>
                    <Link className="readMore" href={props.slug}>Read More</Link>
                </div>
            </div>
        </>
    );
}