import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="page-title">Contact</h1>
        <form id="contact-form">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            email="email"
            placeholder="Email"
            required
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" Submit />
        </form>
      </main>
      <footer className="footer">
        © 2023 Angela Chen | All Rights Reserved
      </footer>
    </>
  );
}
