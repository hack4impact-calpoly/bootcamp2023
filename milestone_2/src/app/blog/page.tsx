import Image from 'next/image'
import styles from './page.module.css'
import PageTitle from "@/components/page-title";
import BlogPreview from '@/components/blogPreview';
import {blogs} from "@/app/blogData";
import {Blog} from "@/types/blog"

export default function Blog() {
  return (
    <div>
    <main className="container">
        <PageTitle title="Blog"/>

        {blogs.map(blog => 
            <BlogPreview // This is how we call the component

            name={blog.title}
            description={blog.description}
            image={blog.image}
            posted={blog.date}
            key={blog.key}
            link={blog.link}
          />
		)}
    </main>
    </div>

  )
}


