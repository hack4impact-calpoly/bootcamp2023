import React from "react";

export default function Contact() {
  return (
    <div>
        <main> 
        <h1 className="page-title">My Contact</h1>
        <form id="contact-form">
            <label htmlFor="name">Name</label>

            <input type="text" id="name" placeholder="Name" required/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required/>
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" name="comments" placeholder="Comments" required></textarea>
            <input type="submit" value="Submit"/>
        </form>
        </main>
        <footer className="footer">
        © 2023 Ivan's Contact | All Rights Reserved
        </footer>
    </div>
  )
}