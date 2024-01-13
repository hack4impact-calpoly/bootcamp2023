'use client'
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser'
import { useRef } from "react";


export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  if (form.current) {
      emailjs.sendForm('service_hvt7qrh', 'template_6octomi', form.current, 'fAXkdEUC2pquyCRCi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });}
  else {
    console.error('error')
  }
    };
  return (
        <main>
        <h1 className="page-title">Contact Me!</h1>
            <p>Hello! This is my contact info.</p>
              <p>Email: achan214@calpoly.edu</p> 
            <p>Phone: 916-835-7081</p>
            <p>Fill this out if you want to reach me!</p>
            <form onSubmit={sendEmail} ref={form}>
              <label htmlFor="name">Name </label>
              <input type="text" id="name" name="name" placeholder="Name" required />
              <br></br>
              <br></br>
              <label htmlFor="email">Email </label>
              <input type="email" id="email" name="email" placeholder="Email" required />
              <br></br>
              <br></br>
              <label htmlFor="message">Message </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <br></br>
              <br></br>
              <input type="submit" value="Submit" />
            </form>
    </main>
    )
}
