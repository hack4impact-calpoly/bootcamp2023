'use client'

import style from "./blogPreview.module.css";
import { Blog } from "@/app/blogData";
import { useRouter } from "next/navigation";

export default function BlogPreview({ blog }: { blog: Blog }) {
  const router = useRouter();

  return (
    <div className={style["blog-entry"]} onClick={() => router.push(`blog/${blog.slug}`)}>
      <h4>
        {blog.title} - {blog.date.toLocaleDateString("en-US")}
      </h4>
      <p>
        {blog.description}
      </p>
    </div>
  )
}