import React from "react";

export default function Contact() {
  return (
    <>
      <main>
        <h1 className="'page-title">
          &quot;All our dreams can come true if we have the courage to pursue
          them.&quot; - Walt Disney
        </h1>
        <form id="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
          <label for="email">Email</label>
          <input type="email" required />
          <label for="message">Message</label>
          <textarea required></textarea>
          <input type="submit" required />
        </form>
        <p>Hello World! This is my website.</p>
        <p>This is a sentence.</p>
      </main>
      <footer className="footer">
        © 2023 Tammy Si&apos;s Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
