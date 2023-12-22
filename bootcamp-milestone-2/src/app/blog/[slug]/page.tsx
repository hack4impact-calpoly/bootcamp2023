"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import style from "./blog_post.module.css";
import Comment, { IComment } from "../../../components/comment";
import { fetchBlog } from "../../../utils/fetchBlog";
import { addComment } from "../../../utils/addComment";
import { Blog } from "../../blogData";

export default function Blog({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<Blog>();
  const [inputCommentData, setInputCommentData] = useState({
    name: "",
    comment: "",
  });

  const slug = params.slug;
  let paragraphs = [];
  let i = 0;

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await fetchBlog(slug);
      setBlog(data);
    };

    fetchBlogData();
  }, [slug]);

  // checks that blog exists
  if (!blog) {
    return <div>Blog not found or has no content</div>;
  }

  const contents = blog.content;

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputCommentData((prevInputCommentData) => ({
      ...prevInputCommentData,
      [name]: value,
    }));
  };

  function handleCommentUpload(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newComment = {
      user: inputCommentData.name,
      comment: inputCommentData.comment,
      time: new Date(),
    };
    addComment(slug, newComment);
  }

  // creates different paragraphs for content
  while (i < contents.length) {
    paragraphs.push(
      <li className={style.paragraph} key={i}>
        {contents[i]}
      </li>
    );
    paragraphs.push(<br />);
    i++;
  }

  return (
    <div>
      <main>
        <h1 className={style.pageTitle}>{blog.title}</h1>
        <h2 className={style.pageDate}>
          <em>{blog.date}</em>
        </h2>

        <div className={style.pageContents}>
          <ul className={style.paragraphList}>{paragraphs}</ul>
          <div className={style.pageComments}>
            <h3 className={style.pageCommentsHeader}>Comments</h3>
            {blog.comments.map((comment: IComment, index: number) => (
              <Comment key={index} comment={comment} />
            ))}
            <form
              className={style.pageAddComment}
              onSubmit={handleCommentUpload}
            >
              <h3 className="pageAddCommentTitle">Write A Comment!</h3>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputCommentData.name}
                onChange={handleCommentChange}
                placeholder="Name"
                required
              />
              <label htmlFor="comment">Your Thoughts...</label>
              <textarea
                id="comment"
                name="comment"
                value={inputCommentData.comment}
                onChange={handleCommentChange}
                placeholder="Tell me what you think!"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <br />
        <div className={style.pageImages}>
          <Image
            src="/cinque_terre_1.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_2.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_3.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_4.jpg"
            alt="view of one of the five towns during our hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_sunrise.jpg"
            alt="sunrise at the first town, Monterosso"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_water.jpg"
            alt="picture of crystal-clear water from the hike"
            className={style.blogPic}
            width="350"
            height="350"
          />
          <Image
            src="/cinque_terre_me.jpg"
            alt="me at Riomaggiore on the second day"
            className={style.blogPic}
            width="350"
            height="350"
          />
        </div>
      </main>
    </div>
  );
}
