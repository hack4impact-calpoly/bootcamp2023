import styles from './page.module.css'
import "../../global.css";
import Link from 'next/link';
import "@/app/full.css" 

// Contact form

export default function Contact() {
  return (
    <div>
        <h1 className="page-title">CONTACT ME</h1>
        You can contact me at dganti@calpoly.edu.

        <main>
            <p>Contact Form</p>
            <form id="contact-form">

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required/>
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                ></textarea>
                <Link href="mailto:dganti@calpoly.edu"><input type="submit" value="Submit"/> </Link>
            </form>
        </main>
        <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
    </div>
    )
}