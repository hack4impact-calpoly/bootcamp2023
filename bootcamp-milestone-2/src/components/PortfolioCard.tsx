import Link from "next/link";
import Image from "next/image";
import styles from "./PortfolioCard.module.css";
import { Project } from "../database/portfolioSchema";

export default function PortfolioCard(props: Project) {
  return (
    <Link className={styles.link} href={`/portfolio/${props.slug}`}>
      <div className={styles.project}>
        <Image
          src={props.image}
          alt="Screenshot of this site's index.html page"
          width="500"
          height="317"
        />
        <div className={styles.projectDetails}>
          <h2 className="projectName">{props.projectName}</h2>
          <p className="projectDate">{props.date}</p>
          <p className="projectDescription">{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
