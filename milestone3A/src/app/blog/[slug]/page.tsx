
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
    const response = await fetch(`http://localhost:3000/api/blog/${params.slug}`);
    const data = await response.json();

    if(data != null) {
        return(
            <div>
                <p>Debug Slug: {data.slug}</p>
                <p>Title: {data.title}</p>
                <p>Date: {data.date}</p>
                <p>Description: {data.description}</p>
                <p>Content: {data.content}</p>
                <p>Comments: {data.comments}</p>
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