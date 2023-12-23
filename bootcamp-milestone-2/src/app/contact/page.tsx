"use client"
import "@/global.css";
import "@/app/full.css" 
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";


// Contact form

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const service_id = 'service_g0dkj6n'
    const template_id = 'template_8989d1d'
    const pub_key = 'srjuFPyyAfmZBWnM2'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "drdonv",
      message: message
    };

    emailjs.send(service_id, template_id, templateParams, pub_key)
            .then((response) => {
                console.log("Success!" , response)
                setName('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email' , error)
            });
  }



  return (
    <div>
        <h1 className="page-title">CONTACT ME</h1>
        <main>
            <h3 id="contact">Contact Form</h3>
            <form id="contact-form" onSubmit={handleSubmit}>

                <label htmlFor="name" id="contact">Name</label>
                <input type="text" id="contact" name="name" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
                
                <label htmlFor="email" id="contact">Email</label>
                <input type="email" id="contact" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="message" id="contact">Message</label>
                <textarea
                id="contact"
                name="message"
                placeholder="Message"
                required
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button id="contact"><input type="submit" value="Submit"/> </button>
            </form>
        </main>

        
        <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
    </div>
    )
  }