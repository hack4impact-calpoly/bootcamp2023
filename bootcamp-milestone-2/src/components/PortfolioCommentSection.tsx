"use client";
import React, { useState } from "react";
import styles from "./PortfolioCommentSection.module.css";
import SubmitCommentFormPortfolio from "./SubmitCommentFormPortfolio";
import { IComment } from "@/database/portfolioSchema";
import SingleComment from "./SingleComment";

interface PortfolioCommentSectionProps {
  comments: IComment[];
}

export default function PortfolioCommentSection({
  comments,
}: PortfolioCommentSectionProps) {
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
