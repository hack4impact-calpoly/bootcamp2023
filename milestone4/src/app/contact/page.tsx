"use client"
import { useState, FormEvent, ChangeEvent } from "react";
import React from "react";
import Style from "./page.module.css";
import emailjs from "@emailjs/browser"

const initState = {
    from_name: "",
    reply_to: "",
    message: "",
}

export default function Contact() {
    const serviceID = "service_nh88vii";
    const templateID = "template_8xshh98";
    const publicKey = "JMLiLP0LUDMY3U12Y"
    const [data, setData] = useState(initState);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs.send( serviceID, templateID, data, publicKey)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            },
            function(error) {
                console.log('FAILED...', error);
            });
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name
        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    //NOTE: in this the name attribute MUST match the variable name of the email template on emailJS
    // name must also match the name used in initState so that handleChange can work properly
  return (<div>
            <main>
                <h1 className={Style["page-title"]}>Contact</h1>
                <form onSubmit={ handleSubmit } id="contact-form"  className={Style["contact-form"]}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="from_name" placeholder="Name" required value={data.from_name} onChange={handleChange}/>
                    <br/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="reply_to" placeholder="Email" required value={data.reply_to} onChange={handleChange}/>
                    <br/>
                    <label htmlFor="comments">Comments</label>
                    <textarea id="comments" name="message" placeholder="Comments" required value={data.message} onChange={handleChange}></textarea>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </main>
			</div>) 
}