import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
    const res = await fetch(`http://localhost:3000/api/blog/${params.slug}`, {cache: "no-store"});
    const blogData = await res.json();

    if(blogData != null) {
        return(
            <div>
                <p>Debug Slug: {blogData.slug}</p>
                <p>Title: {blogData.title}</p>
                <p>Date: {blogData.date}</p>
                <p>Description: {blogData.description}</p>
                <p>Content: {blogData.content}</p>
                <p>Comments: {blogData.comments}</p>
            </div>
        )
    }
    else {
        return(
            "Can't Find Blog"
        )
    }
  }

// TODO: Add CSS styling and map comments