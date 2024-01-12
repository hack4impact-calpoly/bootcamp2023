"use client"
import React from "react";
import emailjs from "@emailjs/browser"
import { useRef } from 'react';


export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_8t6dpg4', 'template_chyjwa6', form.current, 'E66jxiAiiw0cfpbwQ')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    } else {
      console.error("Form element not yet available.");
    }
  };


  return (
    <div>
        <main> 
        <h1 className="page-title">My Contact</h1>
      
        <form id="contact-form" onSubmit={sendEmail} ref={form}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" name='name'required/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" name='email' required/>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" name='subject' required/>
            <label htmlFor="comments">Comments</label>
            <textarea id="comments" placeholder="Comments" name='message' required></textarea>
            <input type="submit" value="Submit"/>
        </form>

        </main>
    </div>
  )
}