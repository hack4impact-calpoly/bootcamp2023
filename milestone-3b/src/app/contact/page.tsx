"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <main>
        <h1 className="page-title">Contact</h1>
        <form id="contact-form">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          Email:
          <input
            type="text"
            id="email"
            placeholder="ex. abc@xyz.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          Message:
          <textarea
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input
            type="submit"
            required
            onClick={(e) => {
              e.preventDefault();

              if (email === "" || name === "" || message == "") {
                setSuccess(false);
                setErrorMessage("Invalid fields");
              } else {
                const params = {
                  from_name: name,
                  email,
                  to_name: "Angela",
                  message,
                };

                emailjs
                  .send(
                    "service_50pz82h",
                    "template_i0hikrb",
                    params,
                    "Hu6SVaz9_Nocul6mr"
                  )
                  .then(
                    (res) => {
                      console.log(res);
                      setEmail("");
                      setName("");
                      setMessage("");
                      setSuccess(true);
                    },
                    (error) => {
                      console.log(error);
                      setSuccess(false);
                      setErrorMessage("Failed to send email");
                    }
                  );
              }
            }}
          />
        </form>
        {!success && <div>{errorMessage}</div>}
        {success && <div>Sent email successfully</div>}
      </main>
      <footer className="footer">
        © 2023 Angela Chen | All Rights Reserved
      </footer>
    </>
  );
}
