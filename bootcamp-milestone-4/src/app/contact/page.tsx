"use client";
import React, { useEffect, useRef } from "react"; // Import React module
import styles from "./contact.module.css"; // Import CSS module
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  useEffect(() => emailjs.init("OpuQUhSN6Ls3dRr7k"), []);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = React.useState(false);

  const validateForm = (): boolean => {
    if (!emailRef.current!.value) {
      toast.error("Email is required.");
      return false;
    }
    if (!nameRef.current!.value) {
      toast.error("Name is required.");
      return false;
    }
    if (!messageRef.current!.value) {
      toast.error("Message is required.");
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
    setLoading(true);
    if (!validateForm()) return;
    const serviceId = "service_auqi2ns";
    const templateId = "template_uzbmglh";
    emailjs
      .send(serviceId, templateId, {
        name: nameRef.current!.value,
        email: emailRef.current!.value,
        message: messageRef.current!.value,
      })
      .then(() => {
        toast.success("Message sent successfully!");
        clearForm();
      })
      .catch((err) => {
        toast.error("Message failed to send.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" ref={nameRef} />
        <input type="email" id="email" placeholder="Email" ref={emailRef} />
        <textarea
          id="message"
          placeholder="Message"
          ref={messageRef}
        ></textarea>
        <input
          className="submit-button"
          type="submit"
          value="Submit"
          disabled={loading}
        />
      </form>
    </div>
  );
}
