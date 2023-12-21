import React from 'react';
import style from './blogPreview.module.css'
import { Blog } from '@/app/blogData';

export default function BlogPreview(props: Blog) {
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className={style.bordered_container}>
            <div>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h2>{props.date}</h2>
            </div>
            <img src={props.image} alt="img" width={400} height={300} ></img>
            <button>Read More</button>
        </div>
    );
}