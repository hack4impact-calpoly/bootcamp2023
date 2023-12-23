"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const sendEmail = (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
       if (!verifyFields){
            return
       }
       const serviceID = "service_uham8zb"
       const templateID = "template_w42syah"
       const publicKey = "FQgjWtJN-LIgwIagK"

        const emailContents =
        {
            from_name: name,
            message: message,
            reply_to: email,
        }
        console.log("sending")
        emailjs.send(serviceID, templateID, emailContents, publicKey)
        console.log("sent")
        clearFields()
        setErrorMessage("Email sucessfully Sent")


    };

    const clearFields = ()=>{
        setName("")
        setEmail("")
        setMessage("")
    }

    const verifyFields = (e: React.FormEvent<HTMLFormElement>)  => {
        if (name === ""){
                setErrorMessage("Name can not be empty")
                return false
        }
        else if (email === ""){
                setErrorMessage("Email can not be empty")
                return false
        }
        else if (message === ""){
                setErrorMessage("Message can not be empty")
                return false
        }
        setErrorMessage("")
        return true
    };
    
    


    return (
        <>
            {errorMessage}
            <h1 className="page-title">Contact Page</h1>
            <form id="contact-form" onSubmit={sendEmail}>
                <h3>Name</h3>
                <input id="name" type="text" required  value={name} onChange ={(e) => setName(e.target.value)}/>
                <h3>Email</h3>
                <input id="email" type="email" required value={email} onChange ={(e) => setEmail(e.target.value)}/>
                <h3>Message</h3>
                <input id="someTextArea" required value={message} onChange ={(e) => setMessage(e.target.value)}/>
                <div id="submitButtonContainer">
                    <input id="submitButton" type="submit"/>
                </div>
            </form>
        </>
    )
}
