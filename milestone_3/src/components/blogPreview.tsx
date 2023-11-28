import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image'
import {IBlog} from "@/database/blogSchema"
import Link from "next/link";


export default function BlogPreview(props: IBlog) {
  return (
    <div className={style['blog-prev']}>
    <Image src={props.image} alt="img" width={125} height={125} ></Image>

      <div>
        <Link href={props.link}><h3> {props.title} </h3></Link>
                <div className={style['blog-details']}>
                    <p>{props.description}</p>
                            <p>{props.date.toString()}</p>
                </div>
      </div>
	</div>
  );
}  