"use client";
import React, { useRef, useState } from "react";
import styles from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";

// Define the TemplateParams interface
export interface TemplateParams {
  from_name: string;
  email_id: string;
  message: string;
}

export default function ContactUs() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_usd3zbd",
        "template_aapedgz",
        form.current,
        "M6apdXlayZJ0dtJfq"
      )
      .then(
        (result) => {
          console.log("Email Sent! Server Response is: ", result.text);

          //resets the three input values
          form.current[0].value = "";
          form.current[1].value = "";
          form.current[2].value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(e);
    setEmailSent(true);
  };

  return (
    <div className={styles.componentContainer}>
      {/* Conditionally render "Email Sent" message based on state */}
      {emailSent ? (
        <div className={styles.emailSentMessage}>
          <p>Email Sent!</p>
        </div>
      ) : (
        <div>
          <p></p>
        </div>
      )}
      <h3 className={styles.header}>Send Me an Email!</h3>
      <form ref={form} onSubmit={handleSubmit} className={styles.formContainer}>
        <label className={styles.label}>Name</label>
        <input type="text" name="from_name" className={styles.inputText} />
        <label className={styles.label}>Email</label>
        <input type="email" name="email_id" className={styles.inputEmail} />
        <label className={styles.label}>Message</label>
        <textarea name="message" className={styles.inputMessage} />
        <input type="submit" value="Send" className={styles.inputSubmit} />
      </form>
    </div>
  );
}
