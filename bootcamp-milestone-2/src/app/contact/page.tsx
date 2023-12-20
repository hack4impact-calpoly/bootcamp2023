import Link from "next/link";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <main className={style.page}>
        <h1 className={style.pageTitle}>Contact</h1>
        <div className={style.pageContent}>
          <form className={style.contactForm}>
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
            <label className="all" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <br />
            <br />
            <label className="all" htmlFor="message">
              Message
            </label>
            <textarea
              className="all"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
          <div className={style.links}>
            <p>Email: snguy212@calpoly.edu</p>
            <div className={style.linksButtons}>
              <Link href="https://www.linkedin.com/in/seanmnguyen/">
                LinkedIn
              </Link>
            </div>
            <div className={style.linksButtons}>
              <Link href="https://github.com/seanmnguyen">GitHub</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
