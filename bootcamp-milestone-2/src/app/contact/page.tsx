import style from "./page.module.css";

export default function Contact() {
  return (
    <>
      <h1 className="page-title">Contact</h1>
      <form id={style["contact-form"]}>
        Name:
        <input type="text" id="name" required />
        Email:
        <input type="text" id="email" required />
        Message:
        <textarea></textarea>
        <input type="submit" required />
      </form>
    </>
  )
}