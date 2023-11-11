import React from 'react';
import type { Blog } from "@/app/blogData"
import style from "@/app/home.module.css"
import Image from 'next/image';



export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.about}>
        <div className={style.abouttext}>
        <h3>{props.title} </h3>
        <div>
            <Image src={props.image} alt="img" width={500} height={300}></Image>
            <p>{props.description}</p>
                    <p>Posted on {props.date}</p>
        </div>
      </div>
	</div>
  );
}