import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image'

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3> {props.title} </h3>
      <div>
         <img src="./beach.jpg" alt="img" />
				<Image src="./beach.jpg" alt="img" width={500} height={500} ></Image>
        <p>{props.desc}</p>
		<p>{props.date}</p>
      </div>
	  </div>
  );
}
