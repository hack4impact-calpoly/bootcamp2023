import React, { useState } from 'react';
import style from '/Users/holdenevers/Hack4ImpactBootCamp/bootcamp-project-2023/bootcamp-milestone-3A/src/app/portfolio/portfolio.module.css';

export default function CommentForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name: name, Message: message }),
      });

      if (response.ok) {
        setName('');
        setMessage('');
      } else {
        console.error('Error creating projComment:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating projComment:', error);
    }
  };

  return (
    <div>
      <form className={style.contactForm} method="POST" action="/api/submit-form">
        <p style={{ textAlign: 'center', fontSize: '25px', paddingTop: '100px' }}>
          Comments on Portfolio!
        </p>

        <div className={style.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ color: 'black', height: '20px' }}
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="message-box">Message:</label>
          <textarea
            name="Message"
            className={style.textareaField}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ color: 'black' }}
          ></textarea>
        </div>

        <div className={style.submitButton} style={{ borderColor: 'white', borderStyle: 'double' }}>
          <input type="submit" id="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}
