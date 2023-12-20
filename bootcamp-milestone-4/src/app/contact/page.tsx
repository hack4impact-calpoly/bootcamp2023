import React from "react"; // Import React module
import styles from "./contact.module.css"; // Import CSS module

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <form id="contact-form">
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea id="message" placeholder="Message"></textarea>
        <input className="submit-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}
