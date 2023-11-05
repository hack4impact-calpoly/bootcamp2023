import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
    return (
        <div>
        <main>
            <h1 className="page-title">Portfolio</h1>
            <div className="project">
                <Link className="project-image" href="index.html">
                    <Image src="images/website.png" alt="Image of a Nebula" />
                </Link>
                <div className="project-details">
                    <p className="project-name">
                        Personal Website
                    </p>
                    <p className="project-description">
                        Website about me created with HTML and CSS
                    </p>
                    <Link href="index.html">
                        Learn More
                    </Link>
                </div>
            </div>
        </main>
        </div>
    )
}