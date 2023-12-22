import Image from 'next/image'
import styles from './page.module.css'
import bg from '../../public/homepic.png'


export default function Home() {
  return (
    <div>

    <main id="homepage" className={styles.background}>
      <div>
        <h1>Hi I'm Brandon Eng</h1>

      <div className="home-detail">
        <p>
          I'm a 3rd Year Computer Science Major at Cal Poly SLO with interests in Software Development and AI. 
        </p>
      

        <a href='about.html'><button>Learn More</button></a>
        <a href='https://www.linkedin.com/in/brandon-eng801/'><button>LinkedIn</button></a>
      </div>

      </div>
    </main>
    </div>
    
  )
}
