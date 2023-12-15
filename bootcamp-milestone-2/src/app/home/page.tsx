// You can name the function within page.tsx anything you want.
export default function Home() {
    return (<div>
                  <head>
        <title>Rhoyalinn Cereno's Website</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <nav className="navbar">
            <h1 className="logo">
                <a href="index.html">Welcome to My Website!</a>
                </h1>
            <ul className="nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="resume.html">Resume</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        <main>
            <h1>Rhoyalinn Cereno's Website</h1>
            <div className="about">
                <div className="about-image">
                    {/* <img src="chillselfie.jpg" alt="Picture of me"> */}
                </div>
                <div className="about-text">
            <p><strong>Hello! My name is Rhoyalinn Cereno!</strong></p>
            <p>I am a <strong>software engineering</strong> major student at Cal Poly! A few of my hobbies include hiking, working out, painting, and drawing.</p>
            <p>I'm from Grover Beach, California. I am looking forward to applying for the <strong>Hack4Impact</strong> team.</p>
            </div>
            </div>
        </main>
        <footer className="footer">© 2023 Rhoyalinn Cereno | All Rights Reserved</footer>
    </body>
              </div>) 
  }