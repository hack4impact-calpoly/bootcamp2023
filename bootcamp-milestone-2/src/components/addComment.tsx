"use client";
import React, { useState} from "react";
import { IComment } from "@/database/blogSchema";
import { useRouter } from "next/navigation";


export default function AddComment({ slug }: { slug: string }) {
    const router = useRouter();
    const url = slug; 
    console.log("url " + url);
    const [name, setName] = useState("");
    const [comnt, setComment] = useState("");
  
    const handleReply = async () => {
      if (name.trim() !== "" && comnt.trim() !== "") {
        const message: IComment = { user: name, comment: comnt, time: new Date() };
        try {
          const res = await fetch(
            //`/api/blog/${slug.slug}`,
            `/api/${url}`,            
            {
              method: "POST",
              body: JSON.stringify(message),
              cache: "no-store",
            }
          );
  
          if (!res.ok) {
            throw new Error("Failed to fetch blog");
          }
  
          setName("");
          setComment("");
  
          router.refresh();
  
          return res.json();
        } catch (err: unknown) {
          return null;
        }
      }
    };
  
    return (
        <form onSubmit={handleReply} id="add-comment">
          <input
            required
            id="user"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            required
            id="comment"
            className="text"
            placeholder="Message"
            value={comnt}
            onChange={(e) => setComment(e.target.value)}
          />
          <input className="submit" type="submit" value="Post Comment" />
        </form>
      );
    };


