import React from "react";
import { IComment } from "../database/blogSchema";

export default function Comment(props: IComment) {
  
  return (
    <div >
        <h3 >{props.user}</h3>
        <p >{new Date(props.time).toDateString()}</p>
        <p >{props.comment}</p>
    </div>
  );
}