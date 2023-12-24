"use client";
import React, { useState } from "react";
import styles from "./CommentSection.module.css";
import SingleComment from "./SingleComment";
import SubmitCommentFormPortfolio from "./SubmitCommentFormPortfolio";
import { IComment } from "../database/blogSchema";

type CommentSectionProps = {
  comments: IComment[];
};

export default function CommentSectionPortfolio({
  comments,
}: CommentSectionProps) {
  const [commentList, setCommentList] = useState(comments);

  const addComment = (newComment: IComment) => {
    setCommentList((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.commentsHeader}>
        <h2>Comments</h2>
      </div>
      <div className={styles.commentsList}>
        <div className="scrollContainer">
          {commentList.map((comment: IComment, index) => (
            <SingleComment key={index} comment={comment} />
          ))}
        </div>
      </div>
      <SubmitCommentFormPortfolio onCommentSubmit={addComment} />
    </div>
  );
}
