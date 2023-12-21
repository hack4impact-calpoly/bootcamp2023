import React from 'react';
import Link from 'next/link';
import style from './blogPage.module.css';
import { IBlog, IComment } from '@/database/blogSchema';
import Comment from './comment'


export default function BlogPage(blogpage: IBlog) {
    return (
    <div className={style.blogpage}>
        <h2 className="page-title">{blogpage.title}</h2>
        <p>{blogpage.date.toLocaleString('en-US', {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            })}</p>
        <p>{blogpage.content}</p>
        <Link className={style.backlink} href="/blog">Back To All Blogs</Link>
        <div className={style.allcomments}>
            <h3>Comments</h3>
            {blogpage.comments.map((comment: IComment, index:number) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
        <div className=''>
            <h3>Add Comments:</h3>
            <form className={style.commentform}>
                <label className = {style.label}>Name:</label>
                <input type="text" id="name" className={style.commentname}/>

                <label className = {style.label}>Comment:</label>
                <textarea id="message" className={style.commentbody}/>

                <input type="submit" id="submit" className={style.submitbutton}/>
            </form>
        </div>
	</div>
    )
}
