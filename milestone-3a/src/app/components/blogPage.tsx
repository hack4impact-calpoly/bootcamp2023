import React from 'react';
import Link from 'next/link';
import style from './blogPreview.module.css';
import { IBlog, IComment } from '@/database/blogSchema';
import Comment from './blogComment'

export default function BlogPage(blogpage: IBlog) {
    return (
    <div className={style.blog}>
        <p>{blogpage.date.toDateString()}</p>
        <p>{blogpage.content}</p>
        <div>
            {blogpage.comments.map((comment: IComment, index:number) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
        <Link href="/blog">Back</Link>
	</div>
    )
}