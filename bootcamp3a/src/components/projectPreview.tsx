import React from 'react';
import Image from 'next/image';
import styles from '@/app/portfolio/page.module.css';
import Link from "next/link";

type Comment = {
    user: string;
    comment: string;
    time: String;
}
type Project = {
    title: string;
    description: string; 
    image_link: string;
    image_width: string;
    image_height: string;
    project_link: string;
    comments: Comment[];
};

export default function ProjectPreview(props: Project) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones

        <main className = {styles.main_content}>
        <div className={styles.project}>
            <a>
                <img src={props.image_link} width = {props.image_width} height = {props.image_height}/>
            </a>
            <div className = {styles.project_details}>
                <p className = {styles.project_name}>{props.title}</p>
                <p className = {styles.project_description}>{props.description}</p>
                {props.project_link && (
                    <Link href = {props.project_link}>LEARN MORE</Link>
                )}   
            </div>
        </div>
        <div className = {styles.comments}>
                {props.comments.map((comment, index) => (
                    <div key = {index} className = {styles.comment}> 
                        <p className = {styles.user}>{comment.user}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
        </div>
    </main>
  );
}