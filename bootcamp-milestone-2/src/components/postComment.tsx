"use client"
import React, { useState } from "react";

const PostComment = ({ PostURL }: { PostURL: string }) => {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch(PostURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "user": username, "comment": message, "time": "testing"}),
            });

            const data = await response.json();
            console.log(data) // If success
        } catch (error) {
            console.error('Error posting comment', error);
        }
    };

    return (

        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <p>Username</p>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div>
                    <p>Message</p>
                    <input value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}
export default PostComment
