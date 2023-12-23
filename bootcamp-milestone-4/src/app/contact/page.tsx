import React from "react";
import Header from "../../components/header";
import Styles from './contact.module.css';
import ContactForm from '../../components/contactForm';

export default function Contact() {
    return (
        <div className={Styles.contactPage} >
            <Header pageTitle="Contact"></Header>
            <ContactForm />
        </div>
    );
  }