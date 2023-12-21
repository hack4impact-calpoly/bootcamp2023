import React from "react";
import Header from "../../components/header";
import Layout from '../layout';
import Image from 'next/image';
import Styles from './portfolio.module.css'

export default function Portfolio() {
    return (
        <>
            <div className= {Styles.project}>
                <Header pageTitle="Portfolio" />
                <a href="index.html">
                    <Image src="/Project.png" alt="project screenshot" width={300} height={200} />
                </a>
                <div className= {Styles.projectDetails}>
                    <p className= {Styles.projectName}>My Personal Website</p>
                    <p className= {Styles.projectDescription}>A showcase of my work and interests.</p>
                    <a href= "index.html">Learn More</a>
                </div>
            </div>
        </>
    );
  }