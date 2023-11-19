import style from "../blog.module.css";
import BlogPreview from "@/app/components/blogPreview";
import Link from "next/link";

export default function Blog2() {
  return (
    <main>
      <div className={style.page_title}>
        <h1>Becoming a Blogger</h1>
      </div>
      <div className={style.blog_container}>
        <h2 className={style.post_subtitle}>Oct. 21, 2023</h2>
        <p className={style.post_description}>
          I am becoming quite fluent at blogging. Today I took a walk downtown for insomnia cookies. I also took a long nap and did some homework.
        </p>
        <div className={style.row}>
        <div className={style.blog_image}>
          <img
            src="../cookies.jpg"
            alt="A picture of my insomnia cookies"
            height="300"
            width="200"
          />
          </div>
          <div className={style.blog_image}>
          <img
            src="../stars.jpg"
            alt="A picture of the stars in SLO"
            height="300"
            width="200"
          />
          </div>
        </div>
      </div>
    </main>
  );
}
