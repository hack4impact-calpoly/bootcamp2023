import React from "react";
import { IComment } from '../../database/blogSchema';
import 'bootstrap/dist/css/bootstrap.css';
import style from './comment.module.css'

/* When we pass props, the name that we use to pass values
		is the key for the type
*/

type CommentProps = {
    comment: IComment;
}


/* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
*/

function parseCommentTime(time: Date){
	return new Date(time).toLocaleString('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.comments}>
            <h5 className={style.title}>{comment.name}</h5>
            <span className={style.time}>{parseCommentTime(comment.time)}</span>
            <span className={style.comment}>{comment.comment}</span>
        </div>
    );
}

export default Comment;