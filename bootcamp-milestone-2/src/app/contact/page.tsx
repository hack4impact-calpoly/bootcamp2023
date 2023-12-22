import react from "react"
import "../globals.css"
import Link from "next/link";
import emailjs from "@emailjs/browser"


function SendMail() {
    const params = {
      email : document.getElementById("email"),
      message : document.getElementById("message"),
      name : document.getElementById("name")
    }
    emailjs.send("service_ns3fymu", "template_icynw6k", params).then(function (res) {
      alert("Success " + res.status)
    })
}

export default function Home() {
  return (<div>
        <main>
          <h1 className="page-title">Contact</h1>
          <div className="links">
            <Link href="https://www.linkedin.com/in/jonathanmd/" target="_blank" rel="noopener noreferrer">LinkedIn</Link> |
            <Link href="https://github.com/jmdebarro" target="_blank" rel="noopener noreferrer">GitHub</Link>
          </div>
          <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
          </script>
          <script type="text/javascript">
            (SendMail(){emailjs.init("lC9WYgOqHNyD4h6K_");})();
          </script>
          <form id="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
            <input type="submit" value="Submit" />
          </form>
        </main>
  </div>
  )
}

