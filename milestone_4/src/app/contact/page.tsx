"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactPage.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from '@emailjs/browser';

// import emailjs from 'emailjs-com';

export default function ContactPage() {
    const url: string = process.env.MONGO_URI as string;
    const serviceId: string = process.env.NEXT_PUBLIC_SERVICE_ID as string;
    const templateId: string = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
    const publicKey: string = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        if (name === "email") {
            setContact({email: value, name: contact['name'], message: contact['message']});
        }

        else if (name === "name") {
            setContact({email: contact['email'], name: value, message: contact['message']});
        }

        else {
            setContact({email: contact['email'], name: contact['name'], message: value});
        }

    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.send(serviceId, templateId, contact, publicKey)
            .then((result) => {
                setStatusMessage('Email sent successfully!');
                setContact({ name: "", email: "", message: "" });
                setIsSubmitting(false);
            }, (error) => {
                setStatusMessage('Failed to send email. Please try again later.');
                setIsSubmitting(false);
            });
    };

    useEffect(() => {
        console.log(contact);
    }, [contact]);

    return (
            <div className={styles.contactFlexContainer}>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                    <i className="fa fa-phone fa-2x" />
                    <a href="tel:916-462-4229">
                        <span>Phone: (916)-462-4229</span>
                    </a>
                    </div>

                    <div className={styles.contactItem}>
                    <i className="fas fa-envelope fa-2x"></i>
                    <a href="mailto:west1luu@gmail.com">
                        <span>Email: west1luu@gmail.com</span>
                    </a>
                    </div>

                    <div className={styles.contactItem}>
                    <i className="fab fa-linkedin fa-2x" />
                    <a target="_blank" rel="norefferer" href="https://www.linkedin.com/in/wesley-luu-067771204/">
                        <span>Linkedin: @Wesley_Luu</span>
                    </a>
                    </div>

                    <div className={styles.contactItem}>
                    <i className="fab fa-discord fa-2x" />
                    <a target="_blank" rel="norefferer" href="https://discord.com/users/615029465726320654">
                        <span>Discord: @Wesleu_Luu</span>
                    </a>
                    </div>
                </div>


                <form className={styles.contactForm} onSubmit={sendEmail}>
                    <p className={styles.contactHeader}>Contact Me</p>
                    <input
                        name="name"
                        placeholder="Your Name"
                        className={styles.formField}
                        onChange={handleChange}
                        required
                        />
                    <input
                        name="email"
                        placeholder="Your Email"
                        className={styles.formField}
                        onChange={handleChange}
                        value={contact.email}
                        required
                        />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className={styles.formField}
                        value={contact.message}
                        onChange={handleChange}
                        required
                        />
                    <input
                        type="submit"
                        value={isSubmitting ? "Sending..." : "Send"}
                        className={styles.submitButton}
                        disabled={isSubmitting}
                        />
                    {statusMessage && <div className={styles.statusMessage}>{statusMessage}</div>}
                </form>
            </div>
    );
};
