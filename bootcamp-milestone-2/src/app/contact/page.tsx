import React from "react";
import Header from "../components/header";
import Layout from '../layout';

export default function Contact() {
    return (
        <Layout>
            <div className="contact-page" >
                <Header pageTitle="Contact"></Header>
                <p>Fill out this form to contact me!</p>
                <form id="contact-form">
                    <label form="name">Name:</label>
                    <input type="text" id="name" name="name" required /><br /><br />

                    <label form="email">Email:</label>
                    <input type="email" id="email" name="email" required /><br /><br />

                    <label form="message">Message:</label>
                    <textarea id="message" name="message" required></textarea><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Layout>
    );
  }