"use client"
import React, { useState } from "react";
import type { Blog } from "../../database/legacyData/blogData.ts";
import style from "./commentSection.module.css";
import Image from "next/image";
import Link from "next/link";
import {IComment} from "@/database/blogSchema.ts"
import { useRouter } from "next/navigation";

export type SlugProp = {
    slug: string;
}

// slug will allow for both projects and blogs to use this 
function CommentSection( props: SlugProp) {
    const router = useRouter();
    const [user, setName] = useState("");
    const [comment, setComment] = useState("");

    async function postComment (e : any) {
        e.preventDefault(); 
        
        // Alert if not all fields are met
        if(!user || !comment) {
            alert("Warning: Both Name and Comment are required.")
            return;
        }
        // Make a post request
        try {
            const res = await fetch(`/api/` + props.slug + `/comment`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({user, comment}),
            });
            console.log("posted")

            // Make the user go to the home page
            if (res.ok) {
                // router.reload()
                router.refresh();
                console.log("Ok")
            } else {
                throw new Error("Failed to add comment.")
            }
        } catch (error) {
            console.log(error);
            console.log("Not Ok")
        }
    }


    return (
        <>          
        <div className={style.background}>  
            <h2>Add a Comment</h2>
            <form onSubmit={postComment} className={style.org}id="contact-form" autoComplete="off">                       
                <input 
                    onChange={(e) => setName(e.target.value)} // keep track of what is written through getting value
                    value={user} // make the value the default state of empty
                    className={style.myInput} type="text" id="name" name="name"
                    placeholder={"Name"}
                    />
                <textarea 
                    onChange={(e) => setComment(e.target.value)}
                    value={comment} // Intial Value of the form
                    className={style.myTextArea}
                    placeholder={"Comment"}
                    ></textarea>
                <input type="submit"/>  
                
            </form>
        </div>
        </>
    );
}


export default CommentSection;