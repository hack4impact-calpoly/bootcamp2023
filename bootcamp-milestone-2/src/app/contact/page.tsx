"use client"
import emailjs from "@emailjs/browser";
import React, {useEffect, useState, useRef} from "react"

export default function Contact (){
    useEffect(() => emailjs.init("KUdHffoWyzLCUrr0H"), []);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null> (null);
    const messageRef = useRef<HTMLInputElement | null> (null);
    const [error, setError] = useState<string | null> (null);
    const [success, setSuccess] = useState<string | null>(null);
 
    const validateForm = (): boolean => {
        if (!emailRef.current!.value){
            setError("Email is required.");
            return false;
        }
        if (!nameRef.current!.value){
            setError("Name is required.");
        }
        if (!messageRef.current!.value){
            setError("Message is required.");
            return false;
        }
        return true;
    }

    const clearForm  =() => {
        emailRef.current!.value = "";
        nameRef.current!.value = "";
        messageRef.current!.value = ""
    };

    async function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        if (!validateForm()) return;
        emailjs
            .send ("service_c9icb5i" ,"template_y83b0rt", {
                name: nameRef.current!.value,
                email: emailRef.current!.value,
                message: messageRef.current!.value
            }, "KUdHffoWyzLCUrr0H")
            .then (() => {
                setSuccess("Message sent successfully");
                alert(success);
                clearForm();
            })
            .catch ((err) => {
                console.error("Error:", err);
                setError("Failed to send message")
            })   
    }

    return (
    <main>
        <h1 className="page-title"> Contact </h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name"> Name: </label>
            <input type="text" id="name" name="name" ref={nameRef} required />
            <br />
            <label htmlFor="email"> Email:</label>
            <input type="email" id="email" name="email" ref={emailRef} required />
            <br/>
            <label htmlFor="message"> Message:</label>
            <input type="text" id="message" name="message" ref={messageRef} required /> 
            <br /> 
            <input type="submit" value="Submit" />
        </form>
    </main>
    )
}