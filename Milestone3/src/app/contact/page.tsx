import React from "react";

export default function Blog() {
    return (
        <main>
            <h1 className="contact">Contact</h1>
            <form id="contact-form">
                <input type="text" id="name" placeholder="Name" />
                <input type="email" id="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" />
            </form>
        </main>
    );
}
