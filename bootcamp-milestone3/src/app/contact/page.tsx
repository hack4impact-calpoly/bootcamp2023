import React from "react";
import "../../../styles/styles.css"

export default function Contact() {
    return(
        <div>
            <main>
                <h1>Contact<span className="period">.</span></h1>
                <form className="contact-form" id="contact-form">
                    <input placeholder="Name"></input>
                    <input placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>

                    <input type="submit" className="submit-button"/>
                </form>
            </main>
        </div>
    );
}