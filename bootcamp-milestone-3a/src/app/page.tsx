import Image from "next/image";
import styles from "./page.module.css";
import blogs from "../database/legacyData/blogData.ts";
import BlogPreview from "./components/blogPreview.tsx";

export default function Home() {
  return (
    <>
      <h1 className={styles.index}>About Me</h1>
      <div className={styles.about}>
        <div className={styles.about_image}>
          <Image
            src={"/images/me.jpg"}
            width={500}
            height={290}
            alt={"This is an image of me!"}
          ></Image>
        </div>
        <div className={styles.about_text}>
          <p>
            {" "}
            Hello my name is <strong>Taran Singh</strong>. This is my website. I
            am a first year student studying <em>Computer Science</em> at Cal
            Poly SLO.{" "}
          </p>
          <p>
            {" "}
            This website is less about showcasing myself and more about
            increasing my web development skills. However, you will still get to
            see bits and pieces of my life and general philosophy as you go
            through the site.{" "}
          </p>
          <p>
            {" "}
            I hope you enjoy this project, which is one of many more to come on
            my journey...{" "}
          </p>
        </div>
      </div>
      <br />
      <h1 className={styles.index}>Blog Previews</h1>

      <div>
        {blogs.map((blog) => (
          <BlogPreview
            // title={blog.title}
            // image={blog.image}
            // image_alt={blog.image_alt}
            // date={blog.date}
            // description={blog.date}
            // slug={blog.slug}
            // key={blog.slug}
            {...blog}
            key={blog.slug}
          />
        ))}
      </div>
    </>
  );
}
