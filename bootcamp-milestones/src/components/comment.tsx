import React from 'react';
import type { IComment } from "@/database/commentSchema";

{/* When we pass props, the name that we use to pass values
		is the key for the type
*/}
type CommentProps = {
    comment: IComment;
}

function Comment({ comment }: CommentProps) {
    return (
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <span>{comment.date}</span>
        </div>
    );
}

export default Comment;