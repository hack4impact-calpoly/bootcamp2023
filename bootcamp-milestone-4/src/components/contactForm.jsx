"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contactForm.module.css';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2jh5mcd', 'template_fnrjq5g', form.current, '1n6i7cN2sCI_7z9MS')
        .then((result) => {
            console.log(result.text);
            console.log("success!");

            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
  };

  return (
    <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
      <label className={styles.label}>Name</label>
      <input className={styles.input} type="text" name="from_name" />
      <label className={styles.label}>Email</label>
      <input className={styles.input} type="email" name="user_email" />
      <label className={styles.label}>Message</label>
      <textarea className={styles.textarea} name="message" />
      <input className={styles.submitButton} type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
