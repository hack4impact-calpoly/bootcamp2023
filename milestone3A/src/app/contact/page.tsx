import React from "react";
import Style from "./page.module.css";

export default function Contact() {
  return (<div>
            <main>
                <h1 className="page-title">Contact</h1>
                <form id={Style["contact-form"]} />
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Name" required />
                    <br/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email" required />
                    <br/>
                    <label htmlFor="comments">Comments</label>
                    <textarea id="comments" name="comments" placeholder="Comments" required></textarea>
                    <br/>
                    <input type="submit" value="Submit" />

            </main>
			</div>) 
}