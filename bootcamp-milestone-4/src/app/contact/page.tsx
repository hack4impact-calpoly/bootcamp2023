"use client";
import React,{useState}  from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    //Email Stuff
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    emailjs.send(
        "service_nu75b6l", // SERVICE ID
        "template_l7rz5xf", // TEMPLATE ID
        {
            Name: formData.name,
            Subject: formData.subject,
            Email: formData.email,
            Message: formData.message,
        },
        "5TX51oYOtQSfQWfN5" // EMAILJS PUBLIC KEY
    ).then(
        (result) => {
            console.log(formData.name)
            console.log(formData.subject)
            console.log(formData.email)
            console.log(formData.message)
            console.log("Email successfully sent!", result.text);
            // Add your success message or any state update here
            setFormData({ name: "", subject: "", email: "", message: "" });
        },
        (error) => {
            console.error("Email failed to send!", error.text);
            // Add your error handling logic here
        }
    );
};

    return (<main>
        <div className="container-fluid" style={{textAlign: "center", marginTop: "40px"}}>
            <div id="form-wrapper" className="row justify-content-center align-items-center">
                <div className="form-container col-5" style={{backgroundColor: "#AB947F"}}>
                    <h3><b>Get in Touch!</b></h3>
                    <form onSubmit={handleSubmit}>
                        <section>
                            <input type="text" id="name" className="form-input" placeholder="Name:" required value={formData.name} onChange={handleChange}></input>
                            <input type="text" id="email" className="form-input" placeholder="Email:" required value={formData.email} onChange={handleChange}></input>
                        </section>
                        <input type="text" id="subject" className="form-input" placeholder="Subject:" required value={formData.subject} onChange={handleChange}></input>
                        <br></br>
                        <input type="text" id="message" className="form-input" placeholder="Message:" required value={formData.message} onChange={handleChange}></input>
                        <br></br>
                        <input type="submit" className="form-input" value="Submit" />
                    </form>
                </div>
                <div className="form-container col-4" style={{backgroundColor: "#C1A993"}}>
                    <h3><b>Contact Me!</b></h3>
                    <br></br>
                    <p><img style={{height: "20px", width: "20px"}} src="assets/icons/phone.png"/> (808) 462-1429</p>
                    <p><img style={{height: "20px", width: "20px"}} src="assets/icons/email.png"/> lminami@calpoly.edu</p>
                </div>
            </div>
        </div>
    </main>) 
}