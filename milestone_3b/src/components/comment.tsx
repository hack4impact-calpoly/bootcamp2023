import React from 'react';
import { IComment } from "@/database/commentSchema";
import styles from './commentSection.module.css'; // Ensure this path is correct

type CommentProps = {
    comment: IComment;
}

function Comment({ comment }: CommentProps) {
    return (
        <div className={styles.commentItem}>
            <div className={styles.commentDate}>
                {new Date(comment.date).toLocaleString()}
            </div>
            <div className={styles.commentUser}>{comment.user}</div>
            <div className={styles.commentDescription}>{comment.comment}</div>
        </div>
    );
}

export default Comment;
