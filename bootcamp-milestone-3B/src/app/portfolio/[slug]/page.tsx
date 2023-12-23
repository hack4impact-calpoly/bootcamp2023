import Image from "next/image";
import PortfolioModel from "../../../database/portfolioSchema";
import style from "./page.module.css";
import connectDB from "../../../helpers/db";

type IParams = {
  params: {
    slug: string;
  };
};

async function getProject(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolio/${slug}`, {
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
    </>
  );
}
