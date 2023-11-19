import style from '../blog.module.css';
import BlogPreview from '@/app/components/blogPreview';
import Link from "next/link";

export default function Blog1(){
    return(
        <main>
        <div className={style.page_title}>
          <h1>First Blog!</h1>
        </div>
        <div className={style.blog_container}>
          <h2 className={style.post_subtitle}>Oct. 20, 2023</h2>
          <p className={style.post_description}>
            This is my first time blogging! Today I walked into downtown SLO to go
            thrifting. 
            I also had a burger and italian ice. After I went on a sunset hike at Pismo Beach! It was very pretty.
          </p>
          <div className={style.blog_image}>
            <img
              src="/sunset.jpg"
              alt="A picture of the sunset over Pismo Beach"
              height="300"
              width="200"
            />
          </div>
        </div>
      </main>  
    )
}