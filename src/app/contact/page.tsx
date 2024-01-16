import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact () {
    return <main>
        <h1 className="page-title">Contact Me</h1> 
        <form id="contact-form" action="https://formsubmit.co/bc13e49507cf683f7a5eb8deff1a6b3f" method="POST">
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" id="name"/>
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" id="email"/>
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message"></textarea>
            <input type="submit"/>
        </form>
    </main>
}