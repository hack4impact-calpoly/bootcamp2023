import React from 'react';
import type { Blog } from "../app/blogData"
import Image from 'next/image'

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <h3> {props.title} </h3>
      <div>
        <p>{props.description}</p>
				<p>{props.date}</p>
      </div>
	  </div>
  );
}