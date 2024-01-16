"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
// import { EmailBody } from "api/../contact";

interface EmailBody {
  name: String;
  email: String;
  message: String;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const m: EmailBody = { name: name, email: email, message: message };

    console.log("fetching");
    console.log(m.email);
    console.log(m.name);
    console.log(m.message);

    const res = await fetch(`/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(m),
    });

    console.log(m.email);
    console.log(m.name);
    console.log(m.message);

    if (m.email === "" || m.name === "" || m.message == "") {
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
  };

  return (
    <>
      <main>
        <h1 className="page-title">Contact</h1>
        <form onSubmit={handleSubmit} id="contact-form">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <input className="submit" type="submit" value="Send Message" />
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
