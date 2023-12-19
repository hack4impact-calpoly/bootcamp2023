import React from 'react';
import type {Blog} from "../blogData"
import Link from "next/link";
import Comment from './comment';


export default function BlogPreview(props: Blog) {
  return (
    <div className="bloglist">
        <h3><Link href={props.slug}> {props.title} </Link></h3>
        <div>
            <p> {props.description} </p>
            <p> {props.date.toLocaleDateString()} </p>
        </div>
        <h5>Comments</h5>
        <Comment comment={{
        user: props.comments.user,
        comment: props.comments.comment,
        time: props.comments.time
      }}></Comment>
	</div>
  );
} 