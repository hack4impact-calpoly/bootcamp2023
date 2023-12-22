import React from 'react';
import style from './blogPreview.module.css'
import Image from "next/image";
import type { IBlog } from '../database/blogSchema';

export default function BlogPreview(props: IBlog) {
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className={style.bordered_container}>
            <div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                {/* <h2>{props.date}</h2> */}
            </div>
            <Image src={props.image} alt="blog image" width={400} height={300} />
            <button><a className={style.button_link} href={props.slug}>Read More</a></button>
        </div>
    );
}