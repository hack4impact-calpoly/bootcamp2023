"use client"
import Image from 'next/image'
import styles from './page.module.css'
import PageTitle from "@/components/page-title";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact()  {
  const [contacted, sendMessage] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_i58uh2q', 'template_8e127ol', form.current!, 'Ib-fvBceoNWG-HGfh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      sendMessage(true);
  };

  return (
    <main>        
      <PageTitle title="Contact"/>
      <div>
        {contacted ? (
          <h1>Thank you, your message has been sent!</h1> 
        ) : (
          <form ref={form} onSubmit={sendEmail} id="contact-form">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send"/>
          </form>
        )}
    </div>
    </main>
  );
};