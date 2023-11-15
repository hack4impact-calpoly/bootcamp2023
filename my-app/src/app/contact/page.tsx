
export default function Contact() {
    return(
        <div>
        <main>
            <h1 className="contact-title">Contact Me</h1>
            <p>If you would like to collaborate on a project together, have some feedback for this website, or just wanna say hi, this is the place to do it!</p>
            <div className="contact-me">
                <p>Leave me your info and I'll get back to you. </p>
                <form id="contact-form">      
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" required></input>
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" required></input>
                    <br />
                    <br />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Tell me something ..." required></textarea>
                    <br />
                    <br />
                    <input type="submit" value="submit"></input>
                    <br /><br />
                </form>
            </div>
            
        </main>
        <br />
        </div>
    )
}