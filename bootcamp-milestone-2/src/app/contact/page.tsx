'use client'
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

export default function Contact() {
 
  const [valid, setValid] = useState(true);
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sriya",
      message: message,
    };

    emailjs
      .send(
        "service_qet54x8",
        "template_jp8yung",
        templateParams, "QnEvzs05m92dRWSFr"
      )
      .then(
        (result) => {
          console.log(result.text);

          setName("");
          setEmail("");
          setMessage("");
          setValid(true);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInvalid = (e: any) => {
    e.preventDefault();
    setValid(false);
    setSent(false);
  };

  return (
  <main>
    <h1 className="page-title">Contact Me!</h1>
        <form id="contact-form" ref={form} onSubmit={sendEmail} onInvalid={handleInvalid}>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />            
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>            
          <input type="submit"></input>
        </form>
  </main>
 
  );
}