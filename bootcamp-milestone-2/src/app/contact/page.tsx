"use client"
import emailjs from '@emailjs/browser';
import { useState } from "react";
import style from "./page.module.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <h1 className="page-title">Contact</h1>
      <form id={style["contact-form"]}>
        Name:
        <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)}/>
        Email:
        <input type="text" id="email" required value={email} onChange={e => setEmail(e.target.value)}/>
        Message:
        <textarea value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <input type="submit" required onClick={e => {
          e.preventDefault();

          if (email === "" || name === "" || message == "") {
            setSuccess(false);
            setErrorMessage("Invalid fields");
          } else {
            const params = {
              from_name: "Daniel",
              email,
              to_name: name,
              message
            };
        
            emailjs.send('service_e5ga4ua', 'template_az54tta', params, 'RqBC9V4eDNs8EV8O_').then((res) => {
              setEmail("");
              setName("");
              setMessage("");
              setSuccess(true);
            }, (error) => {
              console.log(error)
              setSuccess(false);
              setErrorMessage("Failed to send email");
            })
          }
        }}/>
      </form>
      
      {!success && <div>{errorMessage}</div>}
      {success && <div>Send email!</div>}
    </>
  )
}