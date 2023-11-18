import React from "react";
import Link from "next/link";
import type { IProject } from "../database/projectSchema";

export default function ProjectPreview(props: IProject) {
    return (
        <div className="blog-item">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Link href={`./blog/${props._id}`}>
                <button className="blog-btn">Read More</button>
            </Link>
        </div>
    );
}
