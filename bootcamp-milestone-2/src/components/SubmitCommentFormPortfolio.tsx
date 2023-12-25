"use client";
import React, { useState } from "react";
import styles from "./SubmitCommentFormPortfolio.module.css";
import postPortfolioComment from "../helpers/postPortfolioComment";
import { IComment } from "../database/blogSchema";

interface SubmitCommentFormPortfolioParams {
  api_url: string;
  onCommentSubmit: (newComment: IComment) => void;
}

export default function SubmitCommentFormPortfolio(
  props: SubmitCommentFormPortfolioParams
) {
  //these values are updated EVERY time their respective input fields are updated
  const [user, setUser] = useState(""); //holds & updates the value of the user input field
  const [comment, setComment] = useState(""); //holds & updates the value of the comment input field
  const [errorMessage, setErrorMessage] = useState(false);

  //specific React event specified to avoid type error
  //async before params
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //default form submit stopped

    if (user !== "" && comment !== "") {
      const finalComment: IComment = {
        //creates comment object with final values
        user: user,
        comment: comment,
        time: new Date(),
      };

      const response = await postPortfolioComment(finalComment, props.api_url); //adds to database
      console.log("Response: ", response); //database response

      setUser("");
      setComment("");

      props.onCommentSubmit(finalComment);
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
      //some functionality to say the form isn't good
    }
  };

  return (
    <div className={styles.componentContainer}>
      <h3 className={styles.header}>Leave a Comment!</h3>
      {errorMessage ? (
        <div className={styles.errorMessageContainer}>
          <p className={styles.errorMessage}>
            Please ensure that you enter a username and a comment.
          </p>
        </div>
      ) : (
        <div className={styles.errorMessageContainer}>
          <p className={styles.errorMessage}></p>
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.label}>Name</label>
        <input
          onChange={(e) => {
            setUser(e.target.value);
          }}
          value={user}
          type="text"
          name="name"
          className={styles.inputText}
        />
        <label className={styles.label}>Message</label>
        <textarea
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
          name="comment"
          className={styles.inputMessage}
        />
        <input type="submit" value="Send" className={styles.inputSubmit} />
      </form>
    </div>
  );
}
