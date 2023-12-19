import styles from "./page.module.css"
import projects from '../portfolioData.ts';
import PortfolioProject from '../components/portfolioProject';



export default function Portfolio() {
    const project_loaded = projects.map(project => (
        <PortfolioProject
        {...project}
        key={project.slug}
        ></PortfolioProject>
    ))

    return (
        <div className={styles.catalog}>
            <h1>Projects</h1>
            {/* {projects.map(project => 
            <PortfolioProject
                {...project}
                key={project.slug}
            ></PortfolioProject>
            )} */}
            {project_loaded}
        </div>
    )
}
