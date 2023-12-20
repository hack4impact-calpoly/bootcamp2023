import React from 'react';
import style from './blogPreview.module.css'
import "@/global.css"
import Image from 'next/image';
import type { Blog }from "@/app/blogData";
import connectDB from '@/helpers/db';
import Link from 'next/link';

export default function BlogPreview(props: Blog) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
				<Image src={props.image} alt="img" width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>Posted on {props.date}</p>
        <Link href={`../api/blog/${props.slug}`}>
                <button className="blog-btn">Read More</button>
        </Link>
      </div>
	  </div>
  );
}