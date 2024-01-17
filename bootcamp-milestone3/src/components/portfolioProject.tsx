import React from 'react'
import style from './portfolioProject.module.css'
import { IProject } from '@/database/projectSchema'

export default function PortfolioProject(props: IProject) {
    return (
        <div className={style.portfolioProject}>
            <h1>{props.project}</h1>
            <h3>Date: {props.date.toDateString()}</h3>
            <p>{props.description}</p>
        </div>
    );
}
