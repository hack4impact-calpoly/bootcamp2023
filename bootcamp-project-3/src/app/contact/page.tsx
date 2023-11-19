import React from "react";
import style from "./contact.module.css";
import Link from "next/link"

export default function Contact(){
    return(
        <main>
      <h1 className={style.page_title}>Contact</h1>
      <div className={style.form}>
        <form>
          <label className = {style.label} htmlFor="name">Name:</label>
          <input
            type="text"
            id={style.input}
            name="name"
            placeholder="Name"
            required
          />
          <label className = {style.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id={style.input}
            name="email"
            placeholder="Email"
            required
          />
          <label className = {style.label} htmlFor="message">Message:</label>
          <textarea
            id={style.textarea}
            name="message"
            placeholder="Message"
            required
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </main>
    )
}