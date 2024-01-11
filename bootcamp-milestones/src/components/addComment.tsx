"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./addComments.module.css"

const AddComment = (slug: any) => {
    const [user, setUser] = useState("");
    const [comment, setComment] = useState("");
    const router = useRouter();

    const submit = async (e:any) => {
        e.preventDefault(); 
        
        const res = await fetch(`/api/blog/${slug.slug}`, {
            method: "POST",
            body: JSON.stringify({user, comment})
        })

        if (res.ok) {
            setUser("")
            setComment("")
        }

        router.refresh()
    }

    return (
        <div className={style.container}>
            <h2>Leave a Comment</h2>
            <form onSubmit={submit}>
                <input
                    placeholder="Name"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className={style.name} />
                <br></br>
                <textarea 
                    placeholder="Type your comment here"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className={style.comment} />
                <br></br>
                <input type="submit" className={style.submit} />
            </form>
        </div>
    )
}

export default AddComment