export default function Contact() {
    return (<main>
      <h1 className="page-title">Contact Me!</h1>
          <form id="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name"></input>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"></input>
              <label htmlFor="message">Message</label>
              <textarea></textarea>
              <input type="submit"></input>
          </form>
    </main>)
  }