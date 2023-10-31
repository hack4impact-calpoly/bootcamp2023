import React from "react";
import Header from "../components/header";
import Layout from '../layout';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <Layout>
            <div className= "project">
                <Header pageTitle="Portfolio" />
                <a href="index.html">
                    <Image src="/Project.png" alt="project screenshot" width={300} height={200} />
                </a>
                <div className= "project-details">
                    <p className= "project-name">My Personal Website</p>
                    <p className= "project-description">A showcase of my work and interests.</p>
                    <a href= "index.html">Learn More</a>
                </div>
            </div>
        </Layout>
    );
  }