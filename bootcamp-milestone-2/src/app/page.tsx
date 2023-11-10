import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    {/* <nav className="navbar">
    <h1 className="logo">
        <a href="index.html">Amanda Chan's Website </a>
    </h1>
    <ul className="nav-list">
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="resume.html">Resume</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav> */}
<main>
    <h1 className="page-title">About Me!</h1>
    <div className="about">
        <div className="about-image">
            <Image src={'/website_image.jpg'} width={230} height={300} alt='Image of me'></Image>
        </div>
        <div className="about-text">
            <p>Hello there! My name is Amanda Chan. I am a second year <strong>Computer Engineering</strong> student at
            <strong> Cal Poly SLO.</strong> Thank you for visiting my website!</p>
            <p>Some of my interests include running, weightlifting, cooking, fashion, and music!</p>
        </div>
    </div>
</main>
<footer className="footer">
    © 2023 Amanda Chan's Website | All Rights Reserved
</footer>
</>
  )
}
