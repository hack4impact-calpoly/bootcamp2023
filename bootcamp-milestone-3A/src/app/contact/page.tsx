'use client'
import React, { FormEvent, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form=useRef();
    const [fState, setFState]=useState({
        user_name: '',
        email: '',
        message: ''

    })
    function onChange(e){
        const { name, value } = e.target;
        setFState(prevState => ({ ...prevState, [name]: value }));
    }

    function sendEmail(e){
        e.preventDefault();
        console.log(fState.user_name)
        if(!fState.user_name || !fState.email || !fState.message){
            console.log("hello")
            alert("Do not leave any fields blank!")
            return;
        }
    
        emailjs.sendForm('service_dq5a8zl', 'template_9w5l6uz', form.current!, 'q8enxWixgi4KrL4F8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };
    
    return (
        <>
            <main>
            <h2>Contact Me</h2>
            <div className="contact">
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="name">Name:</label>
                    <br></br>
                    <input type="text" name="user_name" onChange={onChange}></input>
                    <br></br>
                <label htmlFor="email">Email:</label>
                    <br></br>
                    <input type="email" name="email" onChange={onChange}></input>
                    <br></br>
                <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea name="message" onChange={onChange}></textarea>
                    <br></br>
                    <input type="submit" id="submit" value="Send"></input>
            </form>
            </div>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
