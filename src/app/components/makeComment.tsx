import React, { useState } from "react";
import style from "@/app/components/blogPreview.module.css";

export default function CreateComment(page: any) {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  const changeUser = (event: any) => {
    setUser(event.target.value);
  };

  const changeComment = (event: any) => {
    setComment(event.target.value);
  };

  const addComment = async (event: any) => {
    event.preventDefault();

    // Convert the Date object to a plain value
    const date = new Date().toISOString();

    const data = { user, comment, date };

    const response = await fetch(`/api/${page.content}/${page.slug}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // Reset the form after submission
    event.target.reset();
  };

  return (
    <div>
      <h3>Add a Comment:</h3>
      <form className={style.commentform} onSubmit={addComment}>
        <label className={style.label}>Name:</label>
        <input
          type="text"
          id="name"
          className={style.commentname}
          onChange={changeUser}
        />

        <label className={style.label}>Comment:</label>
        <textarea
          id="message"
          className={style.commentbody}
          onChange={changeComment}
        />

        <input type="submit" id="submit" className={style.submitbutton} />
      </form>
    </div>
  );
}
