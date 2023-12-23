import PortfolioPreview from "../components/portfolioPreview";
import style from "./page.module.css";
import PortfolioModel, { IPortfolio } from "../../database/portfolioSchema";
import connectDB from "../../helpers/db";

async function getPortfolio() {
  await connectDB(); // function from db.ts before

  try {
    const portfolio = await PortfolioModel.find().sort({ date: -1 }).orFail();
    return portfolio;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const portfolioData = await getPortfolio();
  return (
    <div className={style.portfolio}>
      <h1 className={style.title}>Portfolio</h1>
      {portfolioData ? (
        portfolioData.map(
          (project: IPortfolio, index: number) => (
            console.log(project),
            (
              <PortfolioPreview
                key={index}
                slug={project.slug}
                title={project.title}
                description={project.description}
                img={project.img}
                comments={project.comments}
              />
            )
          )
        ) // This is how we call the component
      ) : (
        <div className={style.title}>No Entries</div>
      )}
    </div>
  );
}
