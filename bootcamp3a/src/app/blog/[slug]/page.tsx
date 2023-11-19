
import styles from '../page.module.css'
import BlogPreview from '@/components/blogPreview';
import Link from "next/link";
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import Blog from '@/database/blogSchema';

type Comment = {
    user: string;
    comment: string;
    time: string;
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
type IParams = {
		params: {
			slug: string
		}
}

export default async function Home({ params: { slug } }: IParams) {
    const response = await fetch(`http://localhost:3000/api/blog/${slug}`)
    const data = await response.json();
    console.log(data)
    //console.log(data.comments)
    
    return(  
        <main className = {styles.main}>
        <h2>{data.title}</h2>
        <h3>Date: {data.date}</h3>
        <p>{data.content}
        </p>
        <div className = {styles.blogImage}>
        <img src={data.image} width = {data.image_width} height ={data.image_height}/>
        </div>
        <div className = {styles.comments}>
            {data.comments?.map((comment : Comment, index: number) => (
                    <div key = {index} className = {styles.comment}> 
                        <p className = {styles.user}>{comment.user}</p>
                        <p>{comment.comment}</p>
                    </div>
                ))}
        </div>
        </main>
    )
}
