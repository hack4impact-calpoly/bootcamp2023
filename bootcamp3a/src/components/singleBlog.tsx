import React from 'react';
import Image from 'next/image';
import style from './blogPreview.module.css';
import Link from "next/link";

type Comment = {
    user: string;
    comment: string;
    time: String;
}
type Blog = {
    title: string;
    date: string;
    content: string;
    image: string;
    image_width: string;
    image_height: string;
    comments: Comment[];
}
  
  export default function SingleBlog(props: Blog) {
    return (
          // replace everything between the <div> & </div> tags
          // with your code from earlier milestones
          <main className = {style.main}>
          <h2>{props.title}</h2>
          <h3>Date: {props.date}</h3>
          <p>{props.content}
          </p>
          <img src={props.image} width = {props.image_width} height = {props.image_height}/>
          <div className = {style.comments}>
              {props.comments.map((comment, index) => (
                      <div key = {index} className = {style.comment}> 
                          <p className = {style.user}>{comment.user}</p>
                          <p>{comment.comment}</p>
                      </div>
                  ))}
          </div>
          </main>
    );
  }