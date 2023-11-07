import React from 'react';
import type {Blog} from "../blogData"
import Link from "next/link";



export default function BlogPreview(props: Blog) {
  return (
    <div className="bloglist">
        <h3><Link href={props.slug}> {props.title} </Link></h3>
        <div>
            <p> {props.description} </p>
            <p> {props.date} </p>
        </div>
	</div>
  );
}