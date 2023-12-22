import React from 'react';
import Image from 'next/image'


export default function Contact() {
  return (
    
            <main className="contact-main">
                <h1>Contact</h1>
                <form id="contact-form" className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" className="input-field" required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" className="input-field" required/>

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" className="textarea-field" required></textarea>

                    <input type="submit" id="submit" className="submit-button" value="Submit"/>
                </form>
            </main>
            
  );
}
