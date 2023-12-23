import React from 'react';
import style from './blogPreview.module.css'
import "@/global.css"
import Image from 'next/image';
import Link from 'next/link';
import type { IProjectPost } from "../database/projectSchema";


export default function ProjectPreview(props: IProjectPost) {
  return (
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
        <Image src={`/images/${props.image}`} alt="img" height={500} width={500} />
        <p>{props.description}</p>
				<p>Posted on {props.date}</p>
        <Link href={`../portfolio/${props.slug}`}>
                <button className="portfolio-button">Learn More</button>
        </Link>
      </div>
	  </div>
  );
}