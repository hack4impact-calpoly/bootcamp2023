import React from "react";
import Link from "next/link";
import type { IBlog } from "../database/blogSchema";

export default function BlogPreview(props: IBlog) {
    console.log(props);
    return (
        <div className="blog-item">
            <h2>{props.title}</h2>
            <div>{props.date.toLocaleDateString()}</div>
            <p>{props.description}</p>
            <Link href={props.slug}>
                <button className="blog-btn">Read More</button>
            </Link>
        </div>
    );
}