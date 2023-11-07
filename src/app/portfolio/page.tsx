import Link from 'next/link'
import React from 'react'

export default function Portfolio() {
    const imgstyle = {
        height: "400px",
        border: "5px black",
    }
    return ( <div>
    <title>Portfolio</title>
    <main>
        <br></br>
        <h1 className="page-title">Portfolio</h1>
        <br></br>
        <div className="project">
            <Link className="link" href="https://scratch.mit.edu/users/7Sofa/"><img style={imgstyle} src="portfolio.png"></img></Link>
            <div className="project-details">
                <p className="project-name">Starter Personal Website</p>
                <br></br>
                <Link className="link" href="/">Learn More</Link>
                <br></br>
            </div>
            <br></br>
        </div>
    </main>
</div>)
}