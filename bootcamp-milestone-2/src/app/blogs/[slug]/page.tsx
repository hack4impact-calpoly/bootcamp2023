/* eslint-disable @next/next/no-img-element */
'use client'
import { useParams } from "next/navigation"
import { blogs } from "@/app/data/blogData"
import Image from 'next/image'


export default function Blog() {
  const router = useParams()
  const blog = blogs.find((blog) => blog.slug == router.slug)
  if (blog) {
    return (
      <main className="flex flex-col px-20 overflow-y-scroll text-white">
        <div className="h-[500px] relative my-5">
          {/* <img src={blog.img} alt={blog.slug} /> */}
          <Image layout="fill" objectFit="contain" src={blog.img} alt={blog.slug} />
        </div>
        <h3 className="text-center text-2xl">{blog.title}</h3>
        <h4 className="text-center text-lg italic">{blog.date}</h4>
        <p className="my-5 text-[#adb5bd] font-light">{blog.content}</p>
      </main>
    )
  }
  }
  