import React from 'react';
import { IComment } from '../database/blogSchema';
import { format } from 'date-fns';
import styles from './comment.module.css';

export type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  const formattedDate = format(time, "MMMM do, yyyy H:mma");
  return formattedDate;
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.commentContainer}>
      <h4 className={styles.commentUser}>{comment.user}</h4>
      <p className={styles.commentText}>{comment.comment}</p>
      <span className={styles.commentTime}>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
