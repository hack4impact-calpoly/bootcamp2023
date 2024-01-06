// source: https://www.emailjs.com/docs/examples/reactjs/
"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from "./contactForm.module.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.sendForm('service_g12ff8c', 'template_ooxcpky', form.current, 'mjqaWwjgt0rWk5hji')
      .then((result) => {
          alert("message received!")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={style.contact_container}>
        <h1 className={style.contact_heading}>Subscribe!</h1>
        <form ref={form} onSubmit={sendEmail}>
            <br></br>
            <label>Name   </label>
            <input className={style.contact_name} type="text" name="user_name" />
            <br></br>
            <label>Email   </label>
            <input className={style.contact_email} type="email" name="user_email" />
            <br></br>
            <br></br>
            <input className={style.contact_submit} type="submit" value="Send" />
        </form>
    </div>
  );
};