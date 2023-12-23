"use client"
import React, { useState } from "react"
import style from '@/app/components/blogPage.module.css';

export default function CreateComment(slug: any) {
    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");
    const time = new Date()

    const changeUser = (event: any) => { setUser(event.target.value); }
    const changeComment = (event: any) => { setComment(event.target.value); }
    const addComment = async (event: any) => {
        event.preventDefault();
        const data = { user, comment, time };
        const response = await fetch(`/api/blog/${slug.slug}/comment`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        event.target.reset();
    }

    return (
        <div>
            <h3>Add a Comment:</h3>
            <form className={style.commentform} onSubmit={addComment}>
                <label className={style.label}>Name:</label>
                <input type="text" id="name" className={style.commentname} onChange={changeUser} />

                <label className={style.label}>Comment:</label>
                <textarea id="message" className={style.commentbody} onChange={changeComment} />

                <input type="submit" id="submit" className={style.submitbutton} />
            </form>
        </div>
    )
}
