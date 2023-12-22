"use client";
import styles from './page.module.css'
import Link from "next/link";
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser'

export default function Home() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        console.log("pressed");
        e.preventDefault();
        const serviceId = 'service_i90stmf';
        const templateId = 'template_z1avqha';
        const publicKey = 'nytgNwUq9kPu-WM7l';

        const templateParams = {
            from_name: name,
            message: message,
            reply_to: email,
        }

        emailjs.send( serviceId, templateId, templateParams, publicKey)
        .then((result) => {
            console.log(result.text);
            if(form.current){
                form.current.reset()
            }
            setName('');
            setMessage('');
            setEmail('');
        }, (error) => {
            console.log(error.text);
        });
        
        
    }
    return(  
        <main className = {styles.main}> 
            <div className={styles.contact_header}><h2>Contact Page</h2></div>
            <form className = {styles.form} id = "styles.contact-form" ref={form}> 
                <label className = {styles.label} htmlFor="name">Name</label>
                <input className = {styles.input} type = "text" id = "name" onChange ={(e) => setName(e.target.value)}/>
                <label className = {styles.label} htmlFor="email">Email</label>
                <input className = {styles.input} type = "email" id = "email" onChange ={(e) => setEmail(e.target.value)}/>
                <label className = {styles.label} htmlFor ="comments">Comments</label>
                    <textarea
                        className = {styles.textarea}
                        id = "comments"
                        name = "comments"
                        placeholder = "Comments"
                        onChange = {(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <input className = {styles.input} type = "submit" value = "Submit" onClick={sendEmail}/>
            </form>
        </main>
           
            
    )
}