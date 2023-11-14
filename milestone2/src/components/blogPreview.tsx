import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "../app/blogData";

export default function BlogPreview(props: Blog) {
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
