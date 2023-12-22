import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './blogPreview.module.css'
import { Blog } from '../blogdata';
import Link from 'next/link';

export default function BlogPreview({title, description, date, image, slug}: Blog) {
  return (<div className={style.blog_post}>
        <div className="col"><img src={image} className={style.blog_img}/></div>
        <div className="col-7 d-flex flex-column align-items-center" style={{padding: "20px"}}>
            <h3 className={style.blog_title}><b>{title}</b></h3>
            <h4 className={style.blog_date}>{date}</h4>
            <p>{description}</p>
            <Link href={`blog/${slug}`} role="button" className={style.blog_link}>Read More!</Link>
        </div>
    </div>);
}