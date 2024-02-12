import React from "react";
import ProjectPreview from "../components/portfolioPreview";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import projects from "../projectData";

export default function Portfolio() {
    return (<main>
        <Navbar/>
        <h1 className="pagetitle">My Portfolio</h1>
        <section className="projectpreviews">
            {projects.map(projects =>
                <ProjectPreview {...projects} />)}
        </section>
        <Footer/>
  </main>) 
  }