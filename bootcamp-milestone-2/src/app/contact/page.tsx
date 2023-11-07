import React from "react";
import Link from "next/link";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <main>
        <h1 className="pageTitle">Contact</h1>
        <form id={style.contactForm}>
          <label htmlFor="name">Name: </label>
          <input type="text" id={style.name} name="name" placeholder="Name" />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id={style.email}
            name="email"
            placeholder="Email"
          />
          <label htmlFor="message">Message: </label>
          <textarea
            rows={30}
            cols={50}
            id={style.message}
            name="message"
            placeholder="Type your message here..."
          ></textarea>
          <input type="submit" />
        </form>
      </main>
    </div>
  );
}
