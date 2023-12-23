import Navbar from "@/components/navbar";
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
                {<Navbar/>}
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