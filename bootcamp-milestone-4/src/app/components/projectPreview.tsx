import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './projectPreview.module.css'
import Link from 'next/link';
import type { IProject } from "../../database/projectSchema";

export default function ProjectPreview({title, description, image}: IProject) {
  return (<div className={style.project_post}>
        <div className="col"><img src={image} className={style.project_img}/></div>
        <div className="col-7 d-flex flex-column align-items-center" style={{padding: "20px"}}>
            <h3 className={style.project_title}><b>{title}</b></h3>
            <p>{description}</p>
        </div>
    </div>);
}