import React from 'react';
import Image from 'next/image'
import style from './portfolioProject.module.css'
import type {IProject} from "../database/projectSchema"

export default function PortfolioProject(props: IProject) {
    return (
        <main>
        <div className={style.project}> 
        <Image src={props.image} width="350" height="170" alt="Portrait image of Elaina Lyons" />
            <div className={style.projectDetails}>
                <p className={style.projectName}> <strong> {props.title}</strong> </p>
                <p className={style.projectDescription}> {props.description} </p>
            </div>
        </div>
    </main>
  );
}
