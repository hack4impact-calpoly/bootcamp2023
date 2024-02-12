import React from 'react';
import style from './blogPreview.module.css'
import Image from "next/image";

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3>{props.title} </h3>
      <div>
        {/* // <img src="./imageLinkHere" alt="img" />
				// we will replace img with Image, made to optimize images produced with Next.js
				<Image src="./chillselfie.jpg" alt="img" width={500} height={500} ></Image> */}
        <p>{props.description}</p>
				<p>{props.date}</p>
        <p>{props.slug}</p>
      </div>
	  </div>
  );
}