import React from 'react';
import style from './blogPreview.module.css'
import Link from 'next/link';
import type { IProject } from "../../database/projectSchema";

export default function ProjectPreview(props: IProject) {
    return (
    <div className={style.project}>
        <div>
            <h3>{props.title}</h3>
            <p>{props.date.toDateString()}</p>
            <p>{props.description}</p>
            <Link className="Read More" href={`portfolio/${props.slug}`}>Read More</Link>
      </div>
	</div>
    )
}