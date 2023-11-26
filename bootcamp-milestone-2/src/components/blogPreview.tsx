import React from 'react';
import type { Blog } from "@/app/blogData";
import Link from "next/link";


export default function BlogPreview(props: Blog) {
    return (
      <div className = "bloglist">
        <h2><Link href={props.slug}> {props.title} </Link></h2>
        <div>
          <p>{props.date}</p>
          <p>{props.description}</p>
        </div>
      </div>
    );
  }