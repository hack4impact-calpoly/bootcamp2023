export default function ContactPage() {
    return (
        <>
            <h1 className="page-title">Contact Page</h1>
            <form id="contact-form">
                <h3>Name</h3>
                <input id="name" type="text" required />
                <h3>Email</h3>
                <input id="email" type="email" required />
                <h3>Message</h3>
                <textarea id="someTextArea" required></textarea>
                <div id="submitButtonContainer">
                    <input id="submitButton" type="submit" />
                </div>
            </form>
        </>
    )
}
