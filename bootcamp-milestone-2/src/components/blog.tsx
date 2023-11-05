import { Blog } from "@/app/blogData";
import Image from "next/image";

export default function Blog({ blog }: { blog: Blog }) {
  return (
    <>
      <h1 className="blog-title">{blog.title}</h1>
      <small>{blog.date}</small>
      <p>{blog.description}</p>
      <Image src={blog.image} alt={blog.title} width="250" height="250" />
    </>
  )
}