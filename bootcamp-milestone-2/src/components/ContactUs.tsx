"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactUs.module.css";

// Define the TemplateParams interface
interface TemplateParams {
  from_name: string;
  email_id: string;
  message: string;
}

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission

    // Access form elements using form.current
    const formData = new FormData(form.current);
    const templateParams: TemplateParams = {
      from_name: formData.get("from_name") as string,
      email_id: formData.get("email_id") as string,
      message: formData.get("message") as string,
    };

    // Call the sendEmail function with the templateParams
    sendEmail(templateParams);
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
