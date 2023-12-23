'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import "../styles/contact.css"
import "../styles/website.css"

interface FormState {
    name: string;
    email: string;
    message: string;
  }
  
export default function Contact() {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
      
        // Check for empty fields
        if (!formState.name || !formState.email || !formState.message) {
          setSubmitError('Please fill out all fields.');
          setIsSubmitting(false);
          return;
        }
      
        try {
            const form = e.currentTarget;
            
            // Using the EmailJS API to send the email
            const response = await emailjs.sendForm(
                'service_qc01m6i',
                'template_6pdekyz',
                form,
                'FCjGlfC6enYSP5QiT'
            );
        
            setSubmitSuccess(true);
            setFormState({ name: '', email: '', message: '' });
            setIsSubmitting(false);
            setSubmitError(null);
        } 

        catch (error) {
            setSubmitError('Error sending the email. Please try again later.');
            setIsSubmitting(false);
        }
      };
  
        return (
            <main>
                <h1 className="page-title">Contact</h1>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required/>
                    <br/>
            
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required/>
                    <br/>
            
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formState.message} onChange={handleChange} required></textarea>
                    <br/>
            
                    {submitError && <p className="error-message">{submitError}</p>}
                    {submitSuccess && <p className="success-message">Email sent!</p>}
            
                    <input type="submit" id="submit" name="Submit" disabled={isSubmitting} />
                    <br/>
                </form>
            </main>
    );
  }