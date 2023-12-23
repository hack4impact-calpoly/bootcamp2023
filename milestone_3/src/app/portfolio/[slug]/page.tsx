"use client";
import Image from "next/image"
import { IComment } from "@/database/blogSchema";
import React, {useState, useEffect} from 'react'
import Comment from "@/components/comment";


type IParams = {
    params: {
        slug: string
    }
}



export default function PortfolioPage({ params:{slug} }: IParams) {
    const [project, setProjectData] = useState({
        title: '',
        description: '',
        image: '',
        link: '',
        comments: [],
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
        time: '',
    });
    const submitComment = async () => {
        const response = await fetch(`https://bdons-website-seven-psi.vercel.app/portfolio/${slug}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
            time: newComment.time,
        }),
        });
        const updatedProjectData = await response.json();
        setProjectData(updatedProjectData);

        setNewComment({
            username: '',
            comment: '',
            time: '',
        });
    }

    useEffect(() => {
        const fetchProjectData = async () => {
          const response = await fetch(`https://bdons-website-seven-psi.vercel.app/portfolio/${slug}`);
          const data = await response.json();
          setProjectData(data);
        };

        fetchProjectData();
      }, [slug]); 

  return (
            <div className="content">
                <div className="blog">
                    <div className="blog-title">
                        {project.title}
                    </div>
                    <div className="blog-image">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width="800"
                            height="500"
                        />

                    </div>
                    <div className="blog-content">
                        {project.description}
                    </div>
                </div>
                <h3 className ="commentTitle">Comments</h3>
                <div className="comments">
                    {project.comments.map((comment:IComment, index:number) => (
                            <Comment key={index} comment={comment} />
                        ))}
        </div>
        <div>
                <form>
                    <div>
                    <label>Name:   </label>
                    <textarea
                        onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
                        required/>
                    </div>
                    <div>
                    <label>Comment:   </label>
                    <textarea
                        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        required/>
                    </div>
                    <div>
                        <button type="button" className="submitButton" onClick={submitComment}>Submit Comment</button>
                    </div>
                </form>
            </div>
            </div>


  )
}