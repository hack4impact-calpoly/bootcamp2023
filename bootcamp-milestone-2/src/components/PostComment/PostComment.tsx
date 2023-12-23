"use client";

import { useState } from "react";

export default function PostComment(slug) {
    const [user, setUser] = useState("");
    const [comment, setComment] = useState("");
    const newSlug = slug.slug;
    const time = new Date();
  
    const addComment = async (event: any) => {
      const data = { user, comment, time };
      const response = await fetch(`/api/blog/${slug.slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if(response.ok) {
        setUser("");
        setComment("");
      }
    };
  
    function handleUser(event: any) {
      setUser(event.target.value);
    }
  
    function handleComment(event: any) {
      setComment(event.target.value);
    }

  return (
    <div>
      <h3 className="text-left text-lg">Add New Comment</h3>
      <input
        onChange={handleUser}
        // value={name}
        type="text"
        placeholder="Add Name Here"
        className="w-full bg-[#F8F9FA] border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <input
              onChange={handleComment}
        type="text"
        placeholder="Add Comment Here"
        className="w-full bg-[#F8F9FA] border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <button
        onClick={addComment}
        className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-[#001523] rounded-lg text-lg"
      >
        Submit
      </button>
    </div>
  );
}
