import React from "react";
import Link from "next/link";
import type { IBlog } from "../database/blogSchema";
import parseCommentTime from "@/app/util/commentFormat";

export default function BlogPreview(props: IBlog) {
    return (
        <div className="blog-item">
            <center>
            <h2>{props.title}</h2>
            <div>{parseCommentTime(props.date)}</div>
            {/* <div>{props.date.toLocaleDateString()}</div> */}
            <p>{props.description}</p>
            <Link href={`./blog/${props._id}`}>
                <button className="blog-btn">Read More</button>
            </Link>
            </center>
        </div>
    );
}
