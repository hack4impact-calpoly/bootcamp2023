"use client"

import React, { useState } from 'react';
import connectDB from "@/helpers/db";
//import mongoose from "mongoose";
import Blog, { IBlog } from '../database/blogSchema';





interface CommentFormProps {
  usernameprop: string, commentTextprop: string, blogSlug: string
}

const CommentForm: React.FC<CommentFormProps> = ({ usernameprop, commentTextprop, blogSlug }) => {
  const [username, setUsername] = useState(usernameprop);
  const [commentText, setCommentText] = useState(commentTextprop);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleCommentTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const url='http://localhost:3000/api/blog/'+blogSlug+'/comment'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, commentText, blogSlug }),
      });

      if (response.ok) {
        // Comment posted successfully
        console.log('Comment posted successfully');
        // You may want to reset the form or perform any other actions here
      } else {
        // Handle error cases
        console.error('Error posting comment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2><br></br>Add a Comment</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />

        <label htmlFor="commentText">Comment:</label>
        <textarea
          id="commentText"
          name="commentText"
          rows={4}
          value={commentText}
          onChange={handleCommentTextChange}
          required
        ></textarea>
        <br />

        <button type="button" onClick={handleSubmit}>
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
