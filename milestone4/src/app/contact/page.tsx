"use client";
import React, { useState } from "react";
import axios from "axios";

export default function Blog() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //get form submission event
        const formElement = e.target as HTMLFormElement;

        //Collect form submission data
        const nameInput =
            formElement.querySelector<HTMLInputElement>(
                'input[name="name"]'
            )?.value;
        const emailInput = formElement.querySelector<HTMLInputElement>(
            'input[name="email"]'
        )?.value;
        const descriptionText = formElement.querySelector<HTMLTextAreaElement>(
            'textarea[name="description"]'
        )?.value;

        //Store form submission data in single JSON to be submitted
        const data = {
            name: nameInput,
            email: emailInput,
            description: descriptionText,
        };

        //Send form data to endpoint
        const response = axios.post("/api/contact", data);
    }

    return (
        <main>
            <h1 className="contact">Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="email" required />
                <textarea name="description" required></textarea>
                <input type="submit" />
            </form>
        </main>
    );
}
