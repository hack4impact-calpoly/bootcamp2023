"use client";
import { ChangeEventHandler, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form.current)
    
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    } else {
      emailjs.sendForm("service_0olv0q3", "template_uqqzz59", form.current!, "ZkYi8HvwXhibw8hsI").then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text); 
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
  };

  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <form ref={form} id="contact-form" onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message: </label>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Contact;
