import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <div style = {{
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: 'url("/homepic.png")'

    }}>
    <main id="homepage">
      <div>
        <h1>Hi I&apos;m Brandon Eng</h1>

      <div className="home-detail">
        <p>
          I&apos;m a 3rd Year Computer Science Major at Cal Poly SLO with interests in Software Development and AI. 
        </p>
      

        <a href='/about'><button>Learn More</button></a>
        <a href='https://www.linkedin.com/in/brandon-eng801/'><button>LinkedIn</button></a>
      </div>

      </div>
    </main>
    </div>
  )
}
