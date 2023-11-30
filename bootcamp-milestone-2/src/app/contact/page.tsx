export const metadata = {
  title: {
    default: "Contact Me",
  },
};

export default function Home() {
  return (
    <main>
      <div className="contact-form-holder">
        <section className="form-information">
          <h1 className="page-title">Contact Me</h1>
          <p className="comment">Feel free to send me a message!</p>
        </section>
        <section className="form">
          <form id="contact-form">
            <label for="text">Name</label>
            <input type="text" id="name" name="name" required />
            <br />

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required />
            <br />

            <label for="comments">Comments</label>
            <textarea id="comments" name="comments" required></textarea>
            <br />

            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
    </main>
  );
}
