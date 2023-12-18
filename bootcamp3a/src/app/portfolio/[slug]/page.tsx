"use client";
import styles from '../../blog/page.module.css';
import React, {useState, useEffect} from 'react'

type Comment = {
    user: string;
    comment: string;
}

type IParams = {
		params: {
			slug: string
		}
}

export default function Home({ params: { slug } }: IParams) {
    const [projectData, setProjectData] = useState({
        title: '',
        description: '',
        content: '',
        image_link: '',
        image_width: 0,
        image_height: 0,
        comments: [],
        project_link: '',
        slug: '',
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
    });

    const submitData = async () => {
        const response = await fetch(`http://localhost:3000/api/portfolio/${slug}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
        }),
        });
        const updatedProjectData = await response.json();
        setProjectData(updatedProjectData);

        setNewComment({
            username: '',
            comment: '',
        });
    }

    useEffect(() => {
        const fetchProjectData = async () => {
          const response = await fetch(`http://localhost:3000/api/portfolio/${slug}`);
          const data = await response.json();
          console.log("data", data)
          setProjectData(data);
          console.log(projectData)
        };
    
        fetchProjectData();
      }, [slug]); 

    return(  
        <main className = {styles.main}>
        <h2>{projectData.title}</h2>
        <p className = {styles.content}>
            {projectData.content}
        </p>
        <div className = {styles.comments}>
            {projectData.comments?.map((comment : Comment, index: number) => (
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
        </main>
    )
}