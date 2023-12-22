"use client";
import styles from '../page.module.css'
import BlogPreview from '@/components/blogPreview';
import Link from "next/link";
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import Blog from '@/database/blogSchema';
import React, {useState, useEffect} from 'react'

type Comment = {
    user: string;
    comment: string;
    time: string;
}

type IParams = {
		params: {
			slug: string
		}
}

export default function Home({ params: { slug } }: IParams) {
    const [isLoading, setLoading] = useState(true)
    const [blogData, setBlogData] = useState({
        title: '',
        date: '',
        content: '',
        image: '',
        image_width: 0,
        image_height: 0,
        comments: [],
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
    });

    const submitData = async () => {
        const response = await fetch(`https://bootcamp-project-2023.vercel.app/api/blog/${slug}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
        }),
        });
        const updatedBlogData = await response.json();
        setBlogData(updatedBlogData);

        setNewComment({
            username: '',
            comment: '',
        });
    }
    console.log(blogData);
    
    useEffect(() => {
        const fetchBlogData = async () => {
            const response = await fetch(`https://bootcamp-project-2023.vercel.app/api/blog/${slug}`);
            const data = await response.json();
            setBlogData(data);
            setLoading(false);

        };
        fetchBlogData();
    }, [slug]); 

    return( 
        <main className = {styles.main}>
        {isLoading ? (
            <p>loading...</p>
        ) :
        (<div className = {styles.main}>
        <h2>{blogData.title}</h2>
        <h3>Date: {blogData.date}</h3>
        <p>{blogData.content}
        </p>
        <div className = {styles.blogImage}>
        <img src={blogData.image} width = {blogData.image_width} height ={blogData.image_height}/>
        </div>
        <div className = {styles.comments}>
            {blogData.comments?.map((comment : Comment, index: number) => (
                    <div key = {index} className = {styles.comment}> 
                        <p className = {styles.user}>{comment.user}</p>
                        <p>{comment.comment}</p>
                    </div>
            ))}
            <div className = {styles.commentForm}>
                <form className = {styles.totalForm}>
                    <div className = {styles.formElement}>
                    <label>Name:   </label>
                    <textarea id="userName" className={styles.userName} 
                        onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
                        required/>
                    </div>
                    <div className = {styles.formElement}>
                    <label>Comment:   </label>
                    <textarea className= {styles.userComment}
                        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        required/>
                    </div>
                    <div className = {styles.formElement}>
                        <button type="button" className={styles.submitButton} onClick={submitData}>Submit Comment</button>
                    </div>
                </form>
            </div>
        </div>
        </div>)}
        </main>
    )
}

