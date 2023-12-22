"use client";
import React, { useRef } from "react";
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.componentContainer}>
      <h3 className={styles.header}>Send Me an Email!</h3>
      <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
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
