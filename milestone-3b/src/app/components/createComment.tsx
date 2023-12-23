"use client";
import React, { useState, useEffect } from "react";
import { IComment } from "../database/blogSchema";
import { useRouter } from "next/navigation";

const CreateComment = (slug: any) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const c: IComment = { user: name, comment: message, time: new Date() };

    const res = await fetch(`/api/blog/${slug.slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(c),
    });

    if (res.ok) {
      setName("");
      setMessage("");
    }

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} id="comment-form">
      <input
        required
        id="user"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <br></br>
      <textarea
        required
        id="comment"
        className="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br></br>
      <br></br>
      <input className="submit" type="submit" value="Post Comment" />
    </form>
  );
};

export default CreateComment;
