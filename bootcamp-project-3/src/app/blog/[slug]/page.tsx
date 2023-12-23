import { IComment } from "../../database/blogSchema";
import style from "../blog.module.css";
import Comment from "../../components/comment";
import Image from "next/image";

// type IParams = {
//     params: {
//         slug: string
//     }
//   }

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

function parseCommentTime(time: Date) {
  /*
    Parses MongoDB/TS date object
    :param time: date object
    :return: string reprsenting date
    */
  // Convert to Los Angeles time
  const losAngelesDate = new Date(
    time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
  );

  // Format the date as desired
  const formattedDate = losAngelesDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}
// @ts-ignore
export default async function Blog({ params }: { slug: string }) {
  const slug = params.slug;
  const blog = await getBlog(slug);
  // render blog if fetched successfully
  if (blog != null) {
    console.log(blog.date.toLocaleString());
    return (
      <main>
        <div className={style.page_title}>
          <h1>{blog.title}</h1>
        </div>
        <div className={style.blog_container}>
          <h2 className={style.post_subtitle}>{parseCommentTime(blog.date)}</h2>
          <p className={style.post_description}>{blog.content}</p>
          <div className={style.row}>
            <div className={style.blog_image}>
              <Image
                src={blog.image}
                alt="img"
                width={250}
                height={300}
              ></Image>
            </div>

            <div className={style.blog_container}>
              <h2>Comments</h2>
              {blog.comments.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  } else {
    // Gracefully handle unkown slugs and null blog when fetched
    return (
      <main>
        <h1>Blog not found</h1>
      </main>
    );
  }
}
