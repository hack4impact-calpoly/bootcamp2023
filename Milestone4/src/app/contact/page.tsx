"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Blog() {
  console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  const [status, setStatus] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //get form submission event
    const formElement = e.target as HTMLFormElement;

    //Collect form submission data
    const nameElement =
      formElement.querySelector<HTMLInputElement>('input[name="name"]');
    const emailElement = formElement.querySelector<HTMLInputElement>(
      'input[name="email"]'
    );
    const messageElement = formElement.querySelector<HTMLTextAreaElement>(
      'textarea[name="message"]'
    );

    //Store form submission data in single JSON to be submitted
    const templateParams = {
      from_name: nameElement?.value,
      from_email: emailElement?.value,
      message: messageElement?.value,
    };

    //clean form
    if (nameElement) nameElement.value = "";
    if (emailElement) emailElement.value = "";
    if (messageElement) messageElement.value = "";

    //send email using emailjs api
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
        template_params: templateParams,
      }
    );

    //check status of email
    if (response.status == 200) {
      setStatus("Email sent successfully.");
    } else {
      setStatus("Email not sent.");
    }
  }

  return (
    <main>
      <h1 className="contact">Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="email" required />
        <textarea name="message" required></textarea>
        <input type="submit" />
        <p>{status}</p>
      </form>
    </main>
  );
}
