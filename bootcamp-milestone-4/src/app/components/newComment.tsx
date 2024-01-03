"use client";
import React, { useState, useEffect } from "react";
import { IComment } from "@/database/blogSchema";
import { useRouter } from "next/navigation";

const NewComment = (slug: any) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const com: IComment = { name: name, comment: comment, time: new Date() };

        const formElements = e.target as HTMLFormElement;
        const nameInput = formElements.querySelector<HTMLInputElement>('input[name="name"]');
        const commentInput = formElements.querySelector<HTMLTextAreaElement>('textarea[name="comment"]');

        const res = await fetch(`/api/blog/${slug.slug}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(com),
        });

        if (res.ok) {
            if (nameInput) nameInput.value = "";
            if (commentInput) commentInput.value = "";
        }

        router.refresh();
    };
    
    return (
    <div id="comment-retreive">
        <h5><u>Leave a Comment</u></h5>
        <form onSubmit={handleSubmit} className="get-comment d-flex flex-column align-items-center">
            <input name="name" required id='name' placeholder='Name' onChange={(e) => setName(e.target.value)} style={{marginBottom: "5px", width: "100%"}}></input>
            <textarea required name="comment" id='comment' onChange={(e) => setComment(e.target.value)} placeholder="Comment" style={{marginBottom: "5px", width: "100%"}}/>
            <input type="submit" value="Submit!" style={{marginBottom: "15px"}}/>
        </form>
    </div>
  );
};

export default NewComment;