import React from 'react';
import type {Blog} from "../blogData"
import Link from "next/link";
import Comment from './comment';
import type {IBlog} from "../database/blogSchema"
import { IComment } from '../database/blogSchema';


export default function BlogPreview(props: Blog) {
  return (
    <div className="bloglist">
        <h3><Link href={props.slug}> {props.title} </Link></h3>
        <div>
            <p> {props.description} </p>
            <p> {props.date.toLocaleDateString()} </p>
        </div>
        
        <h5>Comments</h5>

        <div>
        {props.comments.map((comment: IComment) => (
	          <Comment comment={{
              user: comment.user,
              comment: comment.comment,
              time: comment.time
          }}></Comment>
	            ))}
        </div>

	</div>
  );
} 