'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface CommentFormProps {
  onCommentSubmit: (commentData: { user: string; comment: string; time: Date }) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onCommentSubmit }) => {
  const [user, setUser] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic client-side validation
    if (!user.trim() || !body.trim()) {
      alert('Please enter your name and a comment.');
      return;
    }

    // Get the current time
    const currentTime = getCurrentTime();

    // Call the function provided by the parent component to submit the comment
    onCommentSubmit({ user, comment: body, time: currentTime });

    // Optional: Clear the form after submission
    setUser('');
    setBody('');
  };

  const handleChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  // Function to get the current time
  const getCurrentTime = (): Date => {
    const now = new Date();
    return now;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input type="text" value={user} onChange={handleChangeUser} />
      </label>
      <label>
        Comment:
        <textarea value={body} onChange={handleChangeBody} />
      </label>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;