import React from "react";

export default function Portfolio() {
    return (
        <div>
            <main>
            <h1 className="page-title">My Portfolio</h1>
            <div className="project">
                <a href="index.html">
                    <img src="./professional.jpeg" alt="A picture of my website" width="750" height="500"/>
                </a>
                <div className="project-details">
                    <p className="project-name"><strong>Ivan's Website</strong></p>
                    <p className="project-description">This website was programmed for my Hack4Impact Starter Project!</p>
                    <a href="index.html">Learn More</a>
                </div>
            </div>
            <div className="project">
                <a href="https://users.csc.calpoly.edu/~ialvar15/">
                    <img src="CSC123_Website.png" alt="A picture of my CSC 123 website" width="500" height="500"/>
                </a>
                <div className="project-details">
                    <p className="project-name"><strong>CSC 123 Website</strong></p>
                    <p className="project-description">This website is a portfolio of all my labs for CSC 123</p>
                    <a href="https://users.csc.calpoly.edu/~ialvar15/">Learn More</a>
                </div>
            </div>
            <div className="project">
                <a href="https://editor.p5js.org/22ivana04/full/_KJz2BP6O">
                    <img src="Slithy's_Revenge_Title.png" alt="A picture of my video game" width="550" height="500"/>
                </a>
                <div className="project-details">
                    <p className="project-name"><strong>Slithy's Revenge</strong></p>
                    <p className="project-description">This game was my final project for CSC 123 coded with p5.js</p>
                    <a href="https://editor.p5js.org/22ivana04/full/_KJz2BP6O">Learn More</a>
                </div>
            </div>
            </main>
        </div>
            )
}       