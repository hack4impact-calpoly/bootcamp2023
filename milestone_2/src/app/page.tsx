import styles from './page.module.css'
import Image from 'next/image';


export default function Home() {
  return (<div>
    <main>
        <h1 className="page-title">Welcome!</h1>
        <div className="about">
            <Image className="about-image" src="/headshot.jpg" alt="A headshot of myself" width={"300"} height={"370"}></Image>
            <div className="about-text">
                <p>Hello! My name is <strong>Logan Costello</strong>.</p>
                <p>I am a <em>second</em> year <strong>computer science</strong> major.</p> 
                <p>Software development <em>excites</em> me due to the endless <em>creativity</em> from web development to algorithm design. I can't wait to <strong>serve</strong> my new community while becoming a better software developer!</p>
            </div>
        </div>
    </main>
  </div>)
}
