import React from 'react';
import Image from 'next/image';
import type { Blog } from '@app/blogData';
import style from './blogPreview.module.css'
import "../styles/globals.css";

// Pass your props into the component here ↓↓↓
export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3> Blog Name </h3>
      <div>
        {/* // <img src="./imageLinkHere" alt="img" />
        // we will replace img with Image, made to optimize images produced with Next.js */}
        <Image src="/utahme.jpg" alt="img" width={500} height={500} ></Image>
        <p>Blog description</p>
				<p>Posted on...</p>
      </div>
	  </div>
  );
}
