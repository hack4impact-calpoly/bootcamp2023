import React from 'react';
import type { Blog } from "../blogData";
import style from './blogPreview.module.css'

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <h3> {props.title} </h3>
      <div>
            <p>{props.date}</p>
			<p>{props.description}</p>
      </div>
	  </div>
  );
}