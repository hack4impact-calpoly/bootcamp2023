import React from "react";

function Portfolio(){
    return(
    <main>
        <div className="pg-title">
            <h1>Portfolio</h1>
        </div>
        <div className="project">
            <a className="project-link" href="index.html">
                <img className="project-image" src="site.png" alt="My Hack4Impact site" />
            </a>
            <div className="project-details">
                <h2 className="project-name">HTML/CSS Website</h2>
                <p className="project-description">This is my first HTML and CSS website. I started the project for the Hack4Impact club at school. In the future, I plan to add more CSS stylings and add another JS type function!</p>
                <a href="#">Learn More</a>
            </div>
        </div>

        <div className="project">
            <a className="project-link" href="https://github.com/cbgabler/proj5">
                <img className="project-image" src="forestgame.jpg" alt="My forest game with custom animations and art" />
            </a>
            <div className="project-details">
                <h2 className="project-name">Forest Game Project</h2>
                <p className="project-description">This is a project I worked on for CSC203. During the length of 10 weeks, we built off a basic project adding polymorphism, supers, custom animations, and more! Check out my github page to see the source code.</p>
                <a href="https://github.com/cbgabler/proj5">Learn More</a>
            </div>
        </div>
    </main>
    )
}

export default Portfolio;