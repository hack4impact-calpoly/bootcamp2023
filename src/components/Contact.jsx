import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import style from '@/styles/contactForm.module.css'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //reset the values
    let name = document.getElementById('inputName')
    let email = document.getElementById('inputEmail')
    let message = document.getElementById('inputMessage')
    name.value = ''
    email.value = ''
    message.value = ''


    emailjs.sendForm('service_rr12m3q', 'template_hv656kl', form.current, '2Pg_QENVYuxD8e3ur')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={style.contactFormContainer}>
        <label>Name</label>
        <input type="text" name="from_name" id='inputName'/>
        <label>Email</label>
        <input type="email" name="from_email" id='inputEmail'/>
        <label>Message</label>
        <textarea name="message" id='inputMessage' />
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};