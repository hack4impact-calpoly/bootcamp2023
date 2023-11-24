import Image from "next/image";
import BlogModel from "../../../database/blogSchema";
import connectDB from "../../../helpers/db";
import Comment from "@/app/components/comment";
import { IComment } from "../../../database/blogSchema";
import style from "./page.module.css";

type IParams = {
  params: {
    slug: string;
  };
};

async function getBlog(slug: string) {
  await connectDB(); // function from db.ts before

  try {
    const blog = await BlogModel.findOne({ slug: slug }).orFail();
    return blog;
  } catch (err) {
    return null;
  }
}

export default async function blogPage({ params: { slug } }: IParams) {
  const blogData = await getBlog(slug);
  if (!blogData) {
    return <div>Not Found</div>;
  }
  const comments = blogData.comments;
  return (
    <>
      <div className={style.blog}>
        <h1 className={style.title}>Blogs</h1>
        <h6>{blogData.date.toISOString().substring(0, 10)}</h6>
        <Image
          src={blogData.img ? blogData.img : "/5O_1di3yc-0yQiCpsQ576w.jpg"}
          alt="img"
          width={500}
          height={500}
        ></Image>
        <p>{blogData.content}</p>
      </div>
      <div>
        {comments
          ? comments.map((comment: IComment) => (
              <Comment
                user={comment.user}
                comment={comment.comment}
                time={comment.time}
              ></Comment>
            ))
          : null}
      </div>
    </>
  );
}
