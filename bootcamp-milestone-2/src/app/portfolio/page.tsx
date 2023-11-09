import PortfolioPreview from "../components/portfolioPreview";
import projects from "../portfolioData";
import style from "./page.module.css"

export default function Portfolio() {
  return (
    <div className={style.portfolio}>
      <h1 className={style.title}>Portfolio</h1>
      {projects.map(
        (project) => (
          <PortfolioPreview
            slug={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ) // This is how we call the component
      )}
    </div>
  );
}
