import React from 'react';
import type {Blog} from "../app/blogData";
import style from './blogPreview.module.css';

export default function BlogPreview(props: Blog) {
    return (
    <div className={style.blog}>
        <div>
            <h3>{props.title}</h3>
            <p>{props.date}</p>
			<p>{props.description}</p>
      </div>
	</div>
    )
}