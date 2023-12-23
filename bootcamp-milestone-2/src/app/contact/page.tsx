import Link from "next/link";
export default function Contact() {
    return (<html>
        <head>
            <title>
                Keila's contact
            </title>
            <link rel="stylesheet" href="styles.css"/>
        </head>
        <body>
            <nav className="navbar">
                <h1 className="logo"><a href="index.html">keila's website</a></h1>
                <ul className="nav-list">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="resume.html">Resume</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            <main>
                <h1 className="page-title">contact</h1>
                <form id="contact-form">
                    <input type="text" name = "name" id="name"/>
                    <input type="email" name="email" id="email"/>
                    <textarea
                    id="Message"
                    name="Message"
                    placeholder="Message"
                    required
                  ></textarea>
                  <input type="submit" id="submit"/> 
                </form>
    
            </main>
            <footer></footer>
        </body>
    </html>)
  }