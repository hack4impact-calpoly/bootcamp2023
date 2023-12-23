'use client'
import React, { useState, useEffect } from 'react';
import BlogPage from '../../../components/recipeBlogPage';
import Comment from '../../../components/comment';
import CommentForm from '../../../components/commentForm';

/* eslint-disable */


type Props = {
  params: { slug: string };
};

type IComment = {
	user: string;
	comment: string;
	time: Date;
};

type IBlog = {
	title: string;
	content: string;
	comments: IComment[];
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default function Blog({ params }: Props) {
  const slug = params.slug;
  const [blog, setBlog] = useState<IBlog | null>(null);

  // Function to fetch the blog and set it in the state
  const fetchBlog = async () => {
    try {
		const fetchedBlog = await getBlog(slug);
		setBlog(fetchedBlog);
	  } catch (error) {
		console.error('Error fetching updated blog:', error);
	  }
  };

  // Function to handle comment submission
  const handleCommentSubmit = async (commentBody: IComment) => {
    try {
      const response = await fetch(`http://localhost:3000/api/${slug}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentBody),
      });

      if (response.ok) {
        // If the comment is successfully added, fetch the updated blog
        await fetchBlog();
      } else {
        console.error('Failed to add comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Fetch the blog when the component mounts
  useEffect(() => {
    fetchBlog();
  }, [slug]); // Re-fetch when the slug changes

  if (blog) {
	return (
		<div>
			<BlogPage blog={blog} />
			{blog.comments.map((comment: any) => (
				<Comment key={comment._id} comment={comment} />
			))}
			{/* Include the CommentForm component for adding new comments */}
			<CommentForm onCommentSubmit={handleCommentSubmit} />
		</div>
	)};
}