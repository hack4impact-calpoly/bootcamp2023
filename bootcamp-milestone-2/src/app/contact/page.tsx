import React from "react";
import "../globals.css";
export default function Contact() {
  return (
    <div>
      <main>
        <h1 className="page-title">My Contact Info</h1>
        <form id="contact-form">
          <input type="text" id="name" />
          <input type="email" id="email" />
          <textarea id="message"></textarea>
          <input type="submit" id="submit" />
        </form>
      </main>
      <footer className="footer">
        © 2023 Kelly Becker| All Rights Reserved
      </footer>
    </div>
  );
}
