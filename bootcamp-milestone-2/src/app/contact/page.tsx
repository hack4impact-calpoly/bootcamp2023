import style from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      {/*content goes here */}
      <main>
        <h1 className={style.pageTitle}>Contact</h1>
        <p>Email: snguy212@calpoly.edu</p>
        <p>
          Linkedin:
          <a href="https://www.linkedin.com/in/seanmnguyen/">
            https://www.linkedin.com/in/seanmnguyen/
          </a>
        </p>
        <p>
          GitHub:
          <a href="https://github.com/seanmnguyen">
            https://github.com/seanmnguyen
          </a>
        </p>
        <form className="all" id={style.contactForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <br />
          <br />
          <label className="all" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
          <br />
          <br />
          <label className="all" htmlFor="message">Message</label>
          <textarea
          className="all"
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </main>
    </div>
  );
}
