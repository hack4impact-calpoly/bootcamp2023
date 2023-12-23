"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Validate form fields
      if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill out all fields.');
        return;
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'service_k4mijsq', 
        'template_16zjd1g', 
        templateParams,
        'NUcD3IcikHQcwlCy9'
      );

      setFormData({ name: '', email: '', message: '' });
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
    <main className="contact-main">
      <h1>Contact</h1>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="input-field"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          className="textarea-field"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <input type="submit" id="submit" className="submit-button" value="Submit" />
      </form>
    </main>
  );
}
