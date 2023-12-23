"use client"
import { useState } from "react"
import styles from "./page.module.css"
import emailjs, { sendForm, send } from "@emailjs/browser"
import React, {useRef} from "react"
import { ToastContainer, toast } from "react-toastify"
import {useRouter} from "next/navigation"

export default function Contact() { 

  const router = useRouter(); // So we can refresh the page
  // Use states for the what the user writes so we can keep track of them
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
 
  const form = useRef(); // Like a sticky note saying, hey we are going to be using this for dom manipulation
  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    // stop what default happens 
    e.preventDefault()

    if (name == "" || email == "" || message == "") {
      alert("Please fill out all fields.")
      // toast.warn("Please fill out all fields.")
      // const notify = () => toast("Please fill out all fields.");
      // notify()
      //             <ToastContainer position={"bottom-right"} hideProgressBar={true} theme={"light"}></ToastContainer>
      return
    }
    
    // make our new function that happens when we submit
    emailjs.init("_l5hV8HaNkBrHudpl");
    const serviceID = "contact_service"
    const templateID = "contact_form"

   const templateParams = { // for the email
    to_name: "Taran Singh",
    user_name: name, // from the useState
    user_email: email,
    message: message, 
   } 

    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setName("");
      setEmail("");
      setMessage("");
      alert("Message Sent")
   }, (err) => {
      console.log('FAILED...', err);
      alert("Message Failed: Try directly emailing.")
   });

  }


  return(
        <>
        {/* <div className={styles.contact}> */}
        <h1>Contact</h1>
            {/*ref={form}*/}
            <form onSubmit={sendEmail} className={styles.myForm}id="contact-form" autoComplete="off">                       
                <label className={styles.myLabel} htmlFor="name">Name:</label>         
                <input 
                    onChange={(e) => setName(e.target.value)} // keep track of what is written through getting value
                    value={name} // make the value the default state of empty
                    className={styles.myInput} type="text" id="name" name="name"/>
                <label className={styles.myLabel} htmlFor="email">Email:</label>
                <input className={styles.myInput} 
                    onChange={(e) => setEmail(e.target.value)} // When there a change in the input, it will call this function, which will set the state of email to what ever is written (aka the value)
                    value={email} // Intial Value of the form
                    type="email" id="email" name="email"/>
                <label className={styles.myLabel}>Message:</label>
                <textarea 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message} // Intial Value of the form
                    className={styles.myTextArea}></textarea>
                <input className={styles.submit} type="submit"/>  
            </form>
            <br/>
          {/* </div> */}
          or email me directly at <strong>tsingh33@calpoly.edu</strong>
        </>
  )
}
