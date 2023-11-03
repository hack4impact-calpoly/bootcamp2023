import Image from 'next/image'
import styles from './page.module.css'
import PageTitle from "@/components/page-title";
import Project from "@/components/project";
import Port_Img from "../../../public/hack4impact_portfolio.png";
import CSA_Img from "../../../public/csa_portfolio.png";
import Link from "next/link";


export default function Portfolio() {
  return (
    <div>
    <main>
    <PageTitle title="Portfolio"/>
        <div className="portfolio">

        <Project 
            project_image = {<Image src={Port_Img} alt="Porty" width={250} height={125}/>}
            project_name="Personal Website"
            project_description="Designed and built a personal website using HTML and CSS"
            project_link="/"
        />

        <Project 
            project_image = {<Image src={CSA_Img} alt="CSA" width={250} height={125}/>}
            project_name="CSA Website"
            project_description="Designed and built on Squarespace"
            project_link="https://www.calpolycsa.org/"
        />

        </div>
      </main>
    </div>

  )
}