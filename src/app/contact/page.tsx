"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  useEffect(() => emailjs.init("ksUSuevyyQjQPk46_"), []);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validateForm = (): boolean => {
    if (!emailRef.current!.value) {
      setError("Email is required.");
      return false;
    }
    if (!nameRef.current!.value) {
      setError("Name is required.");
      return false;
    }
    if (!messageRef.current!.value) {
      setError("Message is required.");
      return false;
    }
    return true;
  };

  const clearForm = () => {
    emailRef.current!.value = "";
    nameRef.current!.value = "";
    messageRef.current!.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const serviceId = "service_e6lb5c5";
    const templateId = "template_lheivla";
    emailjs
      .send(serviceId, templateId, {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        message: messageRef.current!.value,
      })
      .then(() => {
        setSuccess("Message send successfully!");
        clearForm();
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to send message");
      });
  };

  return (
    <div>
      <main>
        <h1 className="pageTitle">Contact</h1>
        <div className={style.contact}>
          <form id={style.contactForm} onSubmit={handleSubmit}>
            <label className={style.label} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id={style.name}
              name="name"
              ref={nameRef}
              placeholder="Enter your name"
            />
            <label className={style.label} htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id={style.email}
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
            />
            <label className={style.label} htmlFor="message">
              Message
            </label>
            <textarea
              rows={10}
              id={style.message}
              name="message"
              ref={messageRef}
              placeholder="Type your message here..."
            ></textarea>

            <input className={style.submit} type="submit" />
          </form>
        </div>
      </main>
    </div>
  );
}
