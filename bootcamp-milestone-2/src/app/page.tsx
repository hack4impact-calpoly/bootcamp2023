import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
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
</>
  )
}
