import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import Project from '@/projectData';

export default function project(props: Project) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogContent}>
      <h3> {props.title} </h3>
      <p>{props.description}</p>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={props.image} alt="img" width={500} height={500} ></Image>
        </div> 
      </div>
	  </div>
  );
}