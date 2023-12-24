import style from '../home.module.css';
import "../global.css";
import Link from "next/link";
import ContactForm from '../../components/ContactForm'; 

export default function Contact() {
  return (
    <div>
      <main>
        <h2>Contact Me!</h2>
        <div className={style.about}>
          <div className={style.aboutText}>
            <ContactForm />
          </div>
        </div>

        <div className={style.footer}>
          <footer>© 2023 My Personal Website | All Rights Reserved | Made with love ♥</footer>
        </div>
      </main>
    </div>
  );
}
