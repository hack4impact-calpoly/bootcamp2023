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
  await connectDB(); // function from db.ts before

  try {
    const project = await PortfolioModel.findOne({ slug: slug }).orFail();
    return project;
  } catch (err) {
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
      <div className={style.blog}>
        <h1 className={style.title}>{projectData.title}</h1>
        <Image
          src={
            projectData.img ? projectData.img : "/5O_1di3yc-0yQiCpsQ576w.jpg"
          }
          alt="img"
          width={500}
          height={500}
        ></Image>
        <p>{projectData.description}</p>
      </div>
    </>
  );
}
