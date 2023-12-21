import React from 'react';
import Link from 'next/link';
import style from './blogPage.module.css';
import { IBlog, IComment } from '@/database/blogSchema';
import Comment from './comment'

export default function BlogPage(blogpage: IBlog) {
    return (
    <div className={style.blogpage}>
        <p>{blogpage.date.toLocaleString('en-US', {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            })}</p>
        <p>{blogpage.content}</p>
        <div className={style.allcomments}>
            <h3>Comments</h3>
            {blogpage.comments.map((comment: IComment, index:number) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
        <Link href="/blog">Back To All Blogs</Link>
	</div>
    )
}