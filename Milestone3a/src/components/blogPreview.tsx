import React from "react";
import Link from "next/link";
import type { IBlog } from "../database/blogSchema";

export default function BlogPreview(props: IBlog) {
    return (
        <div className="blog-item">
            <center>
            <h2>{props.title}</h2>
            <div>{props.date.toLocaleDateString()}</div>
            <p>{props.description}</p>
            <Link href={`./blog/${props._id}`}>
                <button className="blog-btn">Read More</button>
            </Link>
            </center>
        </div>
    );
}
