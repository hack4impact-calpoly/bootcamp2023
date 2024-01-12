import React from 'react';
import emailjs from 'emailjs-com';
import '../../../styles.css';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'contact_form', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <main>
        <h1 className="page-title">
          Looking forward to talking with you!
        </h1>
        <p>Fill out the form below or email me at sameerpaykel@gmail.com</p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <br /><br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
          <br /><br />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <br /><br />
          <input className="submit-button" type="submit" value="Submit" />
        </form>
      </main>
      <footer className="footer">
        © 2023 Sammy Paykel | All Rights Reserved
      </footer>
    </div>
  );
}

export default ContactPage;
