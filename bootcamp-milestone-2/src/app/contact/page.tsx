import React from "react";
import Link from "next/link";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <main>
        <h1 className="pageTitle">Contact</h1>
        <div className={style.contact}>
          <form id={style.contactForm}>
            <label className={style.label} htmlFor="name">Name</label>
            <input type="text" id={style.name} name="name" placeholder="Enter your name" />
            <label className={style.label} htmlFor="email">Email</label>
            <input
              type="text"
              id={style.email}
              name="email"
              placeholder="Enter your email"
            />
            <label className={style.label} htmlFor="message">Message</label>
            <textarea
              rows={10}
              id={style.message}
              name="message"
              placeholder="Type your message here..."
            ></textarea>
            <input className={style.submit} type="submit" />
          </form>
        </div>
      </main>
    </div>
  );
}
