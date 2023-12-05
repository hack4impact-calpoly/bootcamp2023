// import React from "react";

// export default function Blog() {
//     return (
//         <main>
//             <h1 className="contact">Contact</h1>
//             <form id="contact-form">
//                 <input type="text" id="name" placeholder="Name" />
//                 <input type="email" id="email" placeholder="Email" />
//                 <textarea placeholder="Message"></textarea>
//                 <input type="submit" />
//             </form>
//         </main>
//     );
// }
"use client"
import React,  {useState}  from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        emailjs
            .send(
                "emailforwebsite", // Replace with your service ID
                "template_w2cpbm6", // Replace with your template ID
                {
                    Name: formData.name,
                    Email: formData.email,
                    Message: formData.message,
                },
                "y7U1P3OweP7t64iLT" // Replace with your user ID
            )
            .then(
                (result) => {
                    console.log("Email successfully sent!", result.text);
                    // Add your success message or any state update here
                    setFormData({ name: "", email: "", message: "" });
                },
                (error) => {
                    console.error("Email failed to send!", error.text);
                    // Add your error handling logic here
                }
            );
    };
    

    return (
        <main>
            <h1 className="contact">Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <input type="submit" value="Submit" />
            </form>
        </main>
    );
}

