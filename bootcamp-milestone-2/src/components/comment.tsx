import React from 'react';
import { Comment } from "@/database/commentSchema";
import style from "./blogPreview.module.css";


export default function CommentPreview(props: Comment) {
    return (
        <div>
            <h3>{props.user}</h3>
            <p>Date: {props.date?.toLocaleString()}</p>
            <p>{props.comment}</p>
        </div>
    );
}

