"use client";

import React, {useState, useEffect} from 'react'
import BlogSlug from "../../components/blogSlug";


type IParams = {
		params: {
			slug: string
		}
}

export default function Blog({ params: { slug } }: IParams) {
    

    const [userComment, setComment] = useState({
        user: '',
        comment: '',
        date: ''

    });

    const [blog, setBlog] = useState({
        title: '',
        date: '',
        description: '',
        comments: [],
        slug: '',
      });

    const addComment = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/blog/${slug}/comment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user: userComment.user,
              comment: userComment.comment,
              date: userComment.date
            }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to add comment');
          }
      
          const updateBlog = await response.json();
          setBlog(updateBlog);
          setComment({ user: '', comment: '', date: '' });
        } catch (error) {
          console.error('Error adding comment:');
        }
      };


      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/api/blog/${slug}`);
            if (!response.ok) {
              throw new Error('Failed to fetch blog data');
            }
            
            const data = await response.json();
            setBlog(data);
          } catch (error) {
            console.error('Error fetching blog data:');
          }
        };
      
        fetchData();
      }, [slug]);
      

    return(  
        <main>
        
        <div>
                    <BlogSlug
                        title={blog.title}
                        comments={blog.comments}
                        slug= {blog.slug}
                        description={blog.description} 
                        date = {blog.date}
                    />
        <div>
        <label htmlFor="userName">Name:</label>
            <textarea
            id="userName"
            onChange={(e) => setComment({ ...userComment, user: e.target.value })}
            value={userComment.user}
            required
            />

        <label htmlFor="comment">Comment:</label>
            <textarea
            id="comment"
            onChange={(e) => setComment({ ...userComment, comment: e.target.value })}
            value={userComment.comment}
            required
            />

        <button type="button" onClick={addComment}>
          Submit Comment
        </button>
            </div>
            </div>
        </main>
    )
}