import React from "react";
import type { Blog } from "../../database/legacyData/blogData.ts";
import style from "./commentPost.module.css";
import Image from "next/image";
import Link from "next/link";
import {IComment} from "@/database/blogSchema.ts"

export type CommentProps = {
    comment: IComment;
}

// type IComment = {
//     user : "User1",
//     time: "33", // get live date
//     image: "/link"
//     content: "Comment"
// }

// Just assume that we are getting a comment

// In blog, will set up the maping for the comments, for now we are just worring about the front end of a comment
// Geta profile image for this and in public

function parseCommentTime(date : Date){
    
    let months = ['dummy month for 1 to 1 ordering', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let tLocation = date.indexOf("T")
    
    // Date Logic
    let newDate = date.slice(0, tLocation)
    let year = newDate.slice(0, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let month = newDate.slice(0, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let day = newDate.slice(0, newDate.length)
    
    // Time of Day Logic
        // T16:23:57.000Z
    let newTime = date.slice(tLocation + 1)
    let hour = newTime.slice(0, 2)
        newTime = newTime.slice(newDate.indexOf(":") + 1, newDate.length)
    let minute = newTime.slice(0,2) 

    let hourNumber = parseInt(hour)
    let A_PM = "AM"
    if ( hourNumber / 12 > 1  ){
         A_PM = "PM"
    } 

    hourNumber %= 12 // Get the actual time

    console.log(date)

   return( `${months[parseInt(month)]} ${day}, ${year} - ${hourNumber}:${minute} ${A_PM}`)

}

const parseDate = (date: string) => {
    let tLocation = date.indexOf("T")
    let newDate = date.slice(0, tLocation)
    let year = newDate.slice(2, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let month = newDate.slice(0, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let day = newDate.slice(0, newDate.length)
  
    const dateFormated = `${month}/${day}/${year}`
    return dateFormated
    // Getting
    // 2023-11-03
    // Desired
    // 11/03/23
  }


function Comment({ comment }: CommentProps) {
    return (
        <div className={style.background}>
        <div className={style.org}>
            <Image
                className={style.user_image}
                src={comment.image} // /images/profile.jpeg
                alt="Profile Picture"
                width={50}
                height={50}
            ></Image>
            <div className={style.content}>
                <h4>{comment.user}</h4>             {/* Name */}
                <p>{comment.comment}</p>            {/* comment */}
            </div>
        </div>
        <span className={style.date}>{parseCommentTime(comment.date)}</span>            {/* Time of the Post */}
        </div>
    );
}


export default Comment;

