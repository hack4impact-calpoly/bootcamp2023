import style from "./contact.module.css";

export default function contact() {
  return (
    <div className={style.contact}>
      <h1 className={style.page_title}>Contact</h1>
      <form id="contact-form">
        <label className={style.label}>Name</label>
        <input type="text" id="name" placeholder="name" />
        <label className={style.label}>Email</label>
        <input type="email" id="email" placeholder="email" />
        <label className={style.label}>Message</label>
        <textarea placeholder="message"></textarea>
        <input type="submit" className="submit" />
      </form>
    </div>
  );
}
