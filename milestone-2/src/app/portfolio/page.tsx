import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/website.css"
import "../styles/portfolio.css"
export default function Portfolio() {
    return (
        <div>
        <main>
            <h1 className="page-title">Portfolio</h1>
            <div className="project">
                <Link className="project-image" href="/home">
                    <Image 
                        src="/website.png"
                        width = {300} 
                        height = {300}
                        alt="Image of a Nebula"
                    />
                </Link>
                <div className="project-details">
                    <p className="project-name">
                        Personal Website
                    </p>
                    <p className="project-description">
                        Website about me created with HTML and CSS
                    </p>
                    <Link href="/home">
                        Learn More
                    </Link>
                </div>
            </div>
        </main>
        </div>
    )
}