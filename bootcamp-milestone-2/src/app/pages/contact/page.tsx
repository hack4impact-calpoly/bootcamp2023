import React from "react";
import RootLayout from "@/app/layout";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <h1 className={styles.logo}>My Contact</h1>
      <div className={styles.about}>
        <div className={styles.aboutText}>
          <p>
            My name is{" "}
            <em>
              <strong>Ethan</strong>
            </em>
            . <br /> I am a computer student at <em>Cal Poly</em>
          </p>
          <p>
            My phone number is{" "}
            <em>
              <strong>619-985-4878</strong>
            </em>
            . <br />
            You can also contact me at <em>ethantrantalis@gmail.com</em>
          </p>
        </div>
        <form id="contact-form" className={styles.contactForm}>
          <input type="text" id="name" placeholder="Name" />
          <input type="email" id="email" placeholder="Email" />
          <textarea id="messages" placeholder="Messages"></textarea>
          <input type="submit" />
        </form>
      </div>
      </div>
  );
};

export default ContactPage;
