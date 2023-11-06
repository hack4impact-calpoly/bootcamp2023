import Image from 'next/image'
import "../globals.css"
import Link from "next/link";

export default function Home() {
  return (<div>
        <main>
          <h1 className="page-title">Contact</h1>
          <div className="links">
            <Link href="https://www.linkedin.com/in/jonathanmd/" target="_blank" rel="noopener noreferrer">LinkedIn</Link> |
            <Link href="https://github.com/jmdebarro" target="_blank" rel="noopener noreferrer">GitHub</Link>
          </div>
          <form id="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </main>
  </div>
  )
}
