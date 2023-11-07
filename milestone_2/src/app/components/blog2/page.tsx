import styles from './page.module.css'
import Image from 'next/image';

export default function Contact() {
  return (<main>
    <h1 className="page-title">Who is Hack4Impact?</h1>
        <p className="about-text">10/23/2023</p>
        <Image className="about-image" src="/h4i.png" alt="Hack4Impact Logo" width="300" height="200"></Image>
        <p className="about-text">We are a student-run 501(c)(3) organization that empowers engineers,
             designers, activists, and humanitarians to create lasting social change by 
             developing projects for local nonprofits. We foster the wider adoption of 
             software as a tool for social good.
        </p>
  </main>)
}