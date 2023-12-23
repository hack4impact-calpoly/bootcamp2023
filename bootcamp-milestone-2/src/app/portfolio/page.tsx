import Link from "next/link";
export default function Portfolio() {
    return (<div>
            <html>
            <head>
                <title>
                    Keila's resume
                </title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                <nav className="navbar">
                    <h1 className="logo"><a href="index.html">keila's website</a></h1>
                    <ul className="nav-list">
                    <Link href="/blog">Blog</Link>
                    <Link href="/portfolio">Portfolio</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/contact">Contact</Link>
                    </ul>
                </nav>
                <main>
                    <h1 className="page-title">portfolio</h1>
                    <div className="project">
                        <a href="index.html"></a>
                    </div>
                        <div className="project-details">
                            <p className ="project-name">My Portfolio of Work!</p>
                            <p className ="project-description">Here I included an image :)</p>
                            <a href="index.html">Learn more</a>
                    </div>
                </main>
                <footer></footer>
            </body>
        </html>
        </div>)
  }