import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact () {
    return <main>
        <h1 className="page-title">Contact</h1> 
        <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"/>
            <label htmlFor="message">Message:</label>
            <textarea id="message"></textarea>
            <input type="submit"/>
        </form>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </main>
}