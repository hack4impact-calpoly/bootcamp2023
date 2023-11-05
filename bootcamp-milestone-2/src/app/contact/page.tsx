import React from "react";
import "../globals.css";
export default function Contact() {
  return (
    <div>
      <main>
        <h1 className="page-title">Contact</h1>

        <form id="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}
