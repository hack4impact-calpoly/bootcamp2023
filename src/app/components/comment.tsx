import React from 'react';
import type { IComment } from "@/database/blogSchema";
import style from './comments.module.css'

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={style.comment}>
            <p className={style.comment_header}>{`${comment.user} | ${comment.date}`}</p>
            <p className={style.comment_body}>{comment.comment}</p>
        </div>
    );
}

export default Comment;