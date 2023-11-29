import Image from "next/image";
import Comment from "@/app/components/comment";
import { IComment, IBlog } from "../../../database/blogSchema";
import style from "./page.module.css";

type IParams = {
  params: {
    slug: string;
  };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-cache",
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

export default async function Blog({ params: { slug } }: IParams) {
  const blogData = await getBlog(slug);
  if (!blogData) {
    return (
      <div className={style.blog} style={{ background: "none" }}>
        <h1 className={style.title}>No Blog Found</h1>
      </div>
    );
  }
  const date = new Date(blogData.date).toDateString();
  return (
    <>
      <div className={style.blog}>
        <h1 className={style.title}>{blogData.title}</h1>
        <h6 className={style.date}>{date}</h6>
        <div className={style.img_container}>
          <Image
            src={blogData.img ? blogData.img : "/5O_1di3yc-0yQiCpsQ576w.jpg"}
            alt="img"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className={style.content_container}>
          <p
            className={style.content}
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          ></p>
        </div>
      </div>
      <h1 className={style.title}>Comments</h1>
      <div>
        {blogData.comments ? (
          blogData.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <h6 className={style.date}>No Comments Yet!</h6>
        )}
      </div>
    </>
  );
}
