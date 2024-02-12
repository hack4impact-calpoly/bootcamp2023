import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import styles from "./contact.module.css";


export default function Contact() {
    return (<div> 
        <Navbar/>
            <h1 className={styles.pagetitle}>Contact Me</h1>
            <form id="contactform"/>
                <label className={styles.label} htmlFor="name">Name: </label>
                <input className={styles.textarea} id="name" type="text"/>
                <label className={styles.label} htmlFor="email">Email: </label>
                <input className={styles.textarea} type="email" id="email"/>
                <label className={styles.label} htmlFor="message">Message: </label>
                {/* <textarea></textarea> */}
                <input className={styles.textarea} type="message" id="message"/>
                <input className={styles.submitbutton} type="submit"/>
            <form/>
        <Footer/>
  </div>
  ) 
}