"use client";
import { useState, useEffect, useCallback } from "react";
import { IBlog } from "@/app/database/blogSchema";
import BlogPreview from "@/app/components/blogPreview";
import axios from "axios";
import Image from "next/image";
import Comment from "@/app/components/Comment";

export default function BlogEntry({ params }: { params: { id: number } }) {
  const [blog, setBlog] = useState<IBlog | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    /*
        Handles form submission by clearing form and appending comment
        */
    e.preventDefault();

    try {
      //get form submission event
      const formElement = e.target as HTMLFormElement;

      // Access values directly from the form elements
      const nameInput =
        formElement.querySelector<HTMLInputElement>('input[name="name"]');
      const descriptionText = formElement.querySelector<HTMLTextAreaElement>(
        'textarea[name="description"]'
      );

      // Explicitly cast e.target to HTMLFormElement
      const newComment = {
        user: nameInput?.value || "",
        comment: descriptionText?.value || "",
        date: new Date(),
      };
      //clear form data
      if (nameInput) nameInput.value = "";
      if (descriptionText) descriptionText.value = "";

      //Add comment to db and update UI
      const response = await axios.post(`/api/blog/${params.id}`, newComment);
      if (response.status === 200) {
        const updatedBlog: IBlog = response.data;
        setBlog(updatedBlog);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const fetchBlogData = useCallback(async () => {
    /*
        This function requests data for a blog specified by id in url and updates page.
        */
    try {
      //get blog data
      const response = await axios.get(`/api/blogs/${params.id}`);
      if (response.status === 200) {
        const blogData: IBlog = await response.data;

        //update page
        setBlog(blogData);
      } else {
        console.error("Failed to fetch blog data");
      }
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  }, [params.id]);

  useEffect(() => {
    fetchBlogData();
  }, [params.id, fetchBlogData]);

  return (
    <main>
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          <Image src={blog.content} alt="img" width={400} height={300}></Image>
          <h2>Comments</h2>
          {blog.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </>
      ) : (
        <p>Loading Blogs...</p>
      )}

      <form className="comment-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" />
        <textarea
          id="description"
          placeholder="Enter Comment"
          name="description"
        ></textarea>
        <input type="submit" />
      </form>
    </main>
  );
}
