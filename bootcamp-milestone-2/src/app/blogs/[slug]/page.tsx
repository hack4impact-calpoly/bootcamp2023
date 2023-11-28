import Image from "next/image";
import BlogModel from "../../../database/blogSchema";
import connectDB from "../../../helpers/db";
import Comment from "@/app/components/comment";
import { IComment, IBlog } from "../../../database/blogSchema";
import style from "./page.module.css";

type IParams = {
  params: {
    slug: string;
  };
};

async function getBlog(slug: string) {
  await connectDB(); // function from db.ts before

  try {
    const blog: IBlog = await BlogModel.findOne({ slug: slug }).orFail();
    return blog;
  } catch (err) {
    return null;
  }
}

export default async function BlogPage({ params: { slug } }: IParams) {
  const blogData: IBlog | null = await getBlog(slug);
  if (!blogData) {
    return <div>Not Found</div>;
  }
  return (
    <>
      <div className={style.blog}>
        <h1 className={style.title}>{blogData.title}</h1>
        <h6 className={style.date}>
          {blogData.date.toISOString().substring(0, 10)}
        </h6>
        <div className={style.img}>
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
      {/* <div>
        {blogData.comments.map((comment: IComment, index: number) => (
          <Comment key={index} {...comment} />
        ))}
      </div> */}
    </>
  );
}
