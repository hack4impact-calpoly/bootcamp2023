"use client";
import React, { useState } from "react";

const AddComment = ({ slug }: { slug: string }) => {
  const [comment, setComment] = useState({ title: "", comment: "", date: {} });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setComment({ ...comment, date: new Date() });
    console.log(slug)

    const res = await fetch(`/api/blog/${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (!res.ok) {
      throw new Error("failed to post comment");
    }
  };

  return (
    <div className="newComment">
      <form onSubmit={handleSubmit}>
        <div className="user">
          <label htmlFor="user">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={comment.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="comment">
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={comment.comment}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddComment;
