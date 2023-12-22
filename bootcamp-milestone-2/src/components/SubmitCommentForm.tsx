"use client";
import React, { useState } from "react";
import styles from "./submitCommentForm.module.css";
import postComment from "../helpers/postComment";
import { IComment } from "../database/blogSchema";

interface SubmitCommentFormParams {
  slug: string;
  onCommentSubmit: (newComment: IComment) => void;
}

export default function SubmitCommentForm(props: SubmitCommentFormParams) {
  //these values are updated EVERY time their respective input fields are updated
  const [user, setUser] = useState(""); //holds & updates the value of the user input field
  const [comment, setComment] = useState(""); //holds & updates the value of the comment input field

  //specific React event specified to avoid type error
  //async before params
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //default form submit stopped

    const finalComment: IComment = {
      //creates comment object with final values
      user: user,
      comment: comment,
      time: new Date(),
    };

    console.log("Comment to Append: ", finalComment);

    const response = await postComment(props.slug, finalComment); //adds to database
    console.log("Response: ", response); //database response

    setUser("");
    setComment("");

    props.onCommentSubmit(finalComment);
  };

  return (
    <div className={styles.componentContainer}>
      <h3 className={styles.header}>Leave a Comment!</h3>
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
