import styles from './page.module.css'
import Image from 'next/image';

export default function Contact() {
  return (<main>
    <h1 className="page-title">Your First Code</h1>
        <p className="about-text">10/23/2023</p>
        <Image src="/helloworld.png" alt="Hack4Impact Logo" width="200" height="150"></Image>
        <ol>
            <li>Download Python</li>
            <li>Write: print("Hello World")</li>
            <li>Run the code</li>
        </ol>
  </main>)
}