import React from 'react'

export default function Contact() {
    return ( <div>
    <title>Contact</title>
    <main>
        <br></br>
        <h1 className="page-title">Contact</h1>
        <form id="contact-form">
            <input placeholder="Name" id="name" type="text"></input>
            <br></br><br></br>
            <input placeholder="Email" id="email" type="email"></input>
            <br></br><br></br>
            <textarea className="ta" placeholder="Message"></textarea>
            <br></br><br></br>
            <input className="submit" type="submit"></input>
        </form>
        <br></br>
    </main>
</div>)
}
