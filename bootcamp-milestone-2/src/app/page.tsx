import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.home}>
      <body>
          <main>
              <h1 className='page-title'>Hello There!</h1>
              <div className="about">
                  <div className="about-image">
                      <Image src={'/shawn.jpg'} width={300} height={300} alt={"An image of Shawn Gill"}></Image>
                  </div>
                  <div className={styles.about_text}>
                      <p>
                          My name is <strong>Shawn Gill</strong>, and I am a third-year computer science student at the 
                          <em> California Polytechnic State University, San Luis Obispo.</em> I created this website to 
                          showcase the HTML and CSS skills I have learned so far as well share a little about myself.</p>
                      <p> 
                          When I am not studying for school, I like to spend my time learning new things, whether
                          they be new languages, new recipes, or new life skills. To unwind I like to watch tv, doodle, 
                          or go on a hike. Welcome to my site and enjoy the ride.

                      </p>
                  </div>
              </div>
          </main>
              <footer className="footer">&copy; 2023 Shawn's Personal Website | All Rights Reserved</footer>
      </body>
    </div>
  )
}