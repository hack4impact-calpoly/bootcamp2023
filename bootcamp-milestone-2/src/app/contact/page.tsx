import React from "react";
import "../styles/contact.css"

function Contact(){
    return(
        <main>
        <h1 className="page-title">Contact</h1>
        <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="Name" required />
            <br></br>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="Email" required/>
            <br></br>

            <label htmlFor="comments">Message:</label>
            <textarea id="message" name="Message" required></textarea>
            <br></br>

            <input type="submit" id="submit" name="Submit" required />
            <br></br>

        </form>
    </main>
    )
}

export default Contact;