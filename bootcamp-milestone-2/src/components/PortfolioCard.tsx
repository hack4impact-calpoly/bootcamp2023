import Link from "next/link";
import Image from "next/image";
import styles from "./PortfolioCard.module.css";
import { Project } from "../database/portfolioSchema";

export default function PortfolioCard(props: Project) {
  return (
    <Link className={styles.link} href={`/${props.slug}`}>
      <div className={styles.project}>
        <Image
          src={props.image}
          alt="Screenshot of this site's index.html page"
          width="500"
          height="317"
          layout="responsive"
        />
        <div className={styles.projectDetails}>
          <h2 className={styles.projectName}>{props.projectName}</h2>
          <p className={styles.projectDate}>{props.date}</p>
          <p className={styles.projectDescription}>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
