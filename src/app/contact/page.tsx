
"use client"
import './styles.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Your Email.js service ID, template ID, and user ID
    const serviceID = "service_k4mijsq";
    const templateID = "template_f9dxleu";
    const publicKey = "NUcD3IcikHQcwlCy9";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent:', response);
        // Add your success message or redirect the user here
      })
      .catch((error) => {
        console.error('Email error:', error);
        // Add your error handling here
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Message:</label>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
