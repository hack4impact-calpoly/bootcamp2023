"use client";
import emailjs from "@emailjs/browser";
import React, { useEffect, useState } from "react";
import style from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  useEffect(() => emailjs.init("611XgVxQ9TYcIKfWV"), []);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formElement = e.target as HTMLFormElement;
      const inputName =
        formElement.querySelector<HTMLInputElement>('input[name="name"]');
      const inputEmail = formElement.querySelector<HTMLInputElement>(
        'input[name="email"]'
      );
      const inputMessage = formElement.querySelector<HTMLTextAreaElement>(
        'textarea[name="message"]'
      );

      const templateParams = {
        from_name: inputName?.value,
        from_email: inputEmail?.value,
        message: inputMessage?.value,
      };

      emailjs
        .send(
          "contact_service",
          "contact_template",
          templateParams,
          "611XgVxQ9TYcIKfWV"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setMessage("Message sent successfully!"); // Set the message here
            if (inputName) inputName.value = "";
            if (inputEmail) inputEmail.value = "";
            if (inputMessage) inputMessage.value = "";
          },
          (err) => {
            console.log("FAILED...", err);
            setMessage("Failed to send message."); // Set the message here
            if (inputName) inputName.value = "";
            if (inputEmail) inputEmail.value = "";
            if (inputMessage) inputMessage.value = "";
          }
        );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <div className={style.body}>
        <div className={style.contact}>
          <h1 className={style.page_title}>Contact</h1>
          <form className={style.form} onSubmit={handleSubmit}>
            <label className={style.label} htmlFor="name">
              Name:
            </label>
            <div className={style.box}>
              <input
                type="text"
                id={style.input}
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <label className={style.label} htmlFor="email">
              Email:
            </label>
            <div className={style.box}>
              <input
                type="email"
                id={style.input}
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <label className={style.label} htmlFor="message">
              Message:
            </label>
            <div className={style.box}>
              <textarea
                id={style.textarea}
                name="message"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button type="submit" className={style.submit_btn}>
              Send
            </button>
            <div>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
