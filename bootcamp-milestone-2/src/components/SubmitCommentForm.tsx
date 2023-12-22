"use client";
import React, { useRef } from "react";
import styles from "./submitCommentForm.module.css";
import postComment from "../helpers/postcomment";
import IComment from "../database/blogSchema";

interface submitCommentFormParams {
  slug: string;
  comment: IComment;
}

export default function submitCommentForm(props: submitCommentFormParams) {
  const form = useRef();

  const OnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const comment: IComment = {
      user: formData.get("name") as string,
      comment: formData.get("message") as string,
      time: new Date(),
    };

    console.log("comment: ", comment);

    const response = await postComment(props.slug, comment);
    console.log("Response: ", response);
  };

  return (
    <div className={styles.componentContainer}>
      <h3 className={styles.header}>Leave a Comment!</h3>
      <form ref={form} onSubmit={OnSubmit} className={styles.formContainer}>
        <label className={styles.label}>Name</label>
        <input type="text" name="name" className={styles.inputText} />
        <label className={styles.label}>Message</label>
        <textarea name="message" className={styles.inputMessage} />
        <input type="submit" value="Send" className={styles.inputSubmit} />
      </form>
    </div>
  );
}
