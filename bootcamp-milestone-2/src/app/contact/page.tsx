import React from "react";
import style from "./contact.module.css"

export default function Contact() {
    return (
        <header>
            <h1 className={style.page_title}>Contact Me</h1>
            <div>
                <form className={style.form}>
                    <label className={style.label} htmlFor="name">Name</label>
                    <input className={style.input} type="text" id="name" name="name" placeholder="Name" required />
                    <label className={style.label} htmlFor="email">Email</label>
                    <input className={style.input} type="email" id="email" name="email" placeholder="Email" />
                    <textarea className={style.textarea} name="" placeholder="" required></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </header>
    );
}