import React from "react"

export default function Contact() {
    return (
        <>
            <main>
            <h2>Contact Me</h2>
            <div className="contact">
            <form id="contact-form">
                <label htmlFor="name">Name:</label>
                    <br></br>
                    <input type="text" id="name"></input>
                    <br></br>
                    <label htmlFor="email">Email:</label>
                    <br></br>
                    <input type="email" id="email"></input>
                    <br></br>
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea id="message"></textarea>
                    <br></br>
                    <input type="submit" id="submit"></input>
            </form>
            </div>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  