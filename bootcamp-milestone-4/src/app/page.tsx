import Image from "next/image";
import styles from "./page.module.css";
import { IBlog, blogSchema } from "@/database/blogSchema.ts";
import BlogPreview from "./components/blogPreview.tsx";

async function getBlogs() {
  try { // If any errors pop up, they will be caught
    
    const res = await fetch(process.env.MY_API + "/api/blogs", {
      cache: 'no-store' // so if we add new blogs, they will show up when the page is refreshed
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch blogs.") // error if we didn't get the data
    }

    return res.json() // return the fetched data as JSON

  } catch (error) {
    console.log(error)
    return null
  } 
}

// Fix the date so it is correctly being shown
const parseDate = (date: string) => {
  let tLocation = date.indexOf("T")
  let newDate = date.slice(0, tLocation)
  let year = newDate.slice(2, newDate.indexOf("-"))
      newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
  let month = newDate.slice(0, newDate.indexOf("-"))
      newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
  let day = newDate.slice(0, newDate.length)

  const dateFormated = `${month}/${day}/${year}`
  return dateFormated
}

export default async function Home() {
  if (await getBlogs() == null){
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
    </>
    )
  }
  
  const {blogs} = await getBlogs();
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
        { blogs.map( (blog : IBlog) => {
          blog.date = parseDate("" + blog.date);
          return (<BlogPreview 
                    {...blog}
                    key={blog.slug}
                  />
                  )}
                  )}
      </div>
    </>
  );
}
