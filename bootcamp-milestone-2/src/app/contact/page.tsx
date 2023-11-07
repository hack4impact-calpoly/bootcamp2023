import React from "react";
import Link from "next/link";
import style from "./contact.module.css";

export default function Navbar() {
  return (
    <div>
      <main>
        <h1 className="pageTitle">Contact</h1>
        <form id="contactForm">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" placeholder="Name" />
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" name="email" placeholder="Email" />
          <label htmlFor="message">Message: </label>
          <textarea
            rows={30}
            cols={50}
            id="message"
            name="message"
            placeholder="Type your message here..."
          ></textarea>
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}