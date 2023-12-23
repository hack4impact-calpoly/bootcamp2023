"use client";
import { useState } from "react";
import Image from "next/image";
import style from "./page.module.css";
import { IComment } from "../../../database/portfolioSchema";
import Comment from "@/app/components/comment";
import AddComments from "@/app/components/addComments";

type IParams = {
  params: {
    slug: string;
  };
};

async function getProject(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolio/${slug}`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function ProjectPage({ params: { slug } }: IParams) {
  const projectData = await getProject(slug);
  if (!projectData) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <div className={style.project}>
        <h1 className={style.title}>{projectData.title}</h1>
        <div className={style.img}>
          <Image
            src={
              projectData.img ? projectData.img : "/5O_1di3yc-0yQiCpsQ576w.jpg"
            }
            alt="img"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className={style.description_container}>
          <p>{projectData.description}</p>
        </div>
      </div>
      <h1 className={style.title}>Comments</h1>
      <div>
        {projectData.comments ? (
          projectData.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <h6 className={style.date}>No Comments Yet!</h6>
        )}
      </div>
      <AddComments key={1} params={{ slug: slug, type: "portfolio" }} />
    </>
  );
}
