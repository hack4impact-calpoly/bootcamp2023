"use client";
import { useEffect, useState } from "react";
import Comment from "@/components/comment";
type Props = {
  params: { title: string };
};

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type IBlog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // for preview
  content: string; // for individual blog page
  comments: IComment[]; // array for comments
};

async function getBlog(title: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${title}`);
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default function Blog({ params: { title } }: Props) {
  const [blog, setBlog] = useState<IBlog | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlog(title);
      setBlog(data);
    };
    fetchData();
  }, [title]);

  const [formData, setFormData] = useState({
    user: "",
    comment: "",
    time: new Date(),
  });

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const addNewComment = async (e: any, title: string) => {
    e.preventDefault();
    const comment_user = formData.user;
    const comment = formData.comment;
    const comment_obj = {
      user: comment_user,
      comment: comment,
      time: new Date(),
    };
    if (!comment_user || !comment) {
      alert("Please enter in a username and comment");
      return null;
    }
    try {
      await fetch(`/api/blog/${title}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment_obj),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (blog) {
    return (
      <div>
        <div className="blogcontent">
          <h1>{blog.title}</h1>
          <h2>{blog.date.toLocaleString()} </h2>
          <h3>{blog.description}</h3>
          <p>{blog.content}</p>
        </div>

        <hr></hr>
        <h2> Comments </h2>
        {blog.comments.map((comment: any, index: any) => (
          <Comment key={index} comment={comment} />
        ))}
        <form name="new-comment" onSubmit={(e) => addNewComment(e, title)}>
          <label>Username</label>
          <input type="text" name="user" onChange={handleInput} />
          <label>Comment</label>
          <textarea name="comment" onChange={handleInput}></textarea>
          <input type="submit" />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1> 404 Blog Not Found</h1>
      </div>
    );
  }
}
