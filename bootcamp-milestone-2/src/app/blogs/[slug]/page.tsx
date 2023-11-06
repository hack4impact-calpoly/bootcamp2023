'use client'
import { useParams } from "next/navigation"
import { blogs } from "@/app/data/blogData"

export default function Blog() {
  const router = useParams()
  const blog = blogs.find((blog) => blog.slug == router.slug)
  if (blog) {
    return (
      <main className="text-white bg-[red] px-20">
        <h3 className="text-2xl">{blog.title}</h3>
        <h4 className="text-lg italic">{blog.date}</h4>
        <p>{blog.content}</p>
      </main>
    )
  }
  }
  