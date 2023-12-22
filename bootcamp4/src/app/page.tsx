import styles from './page.module.css'

export default function Home() {
  return (

      <main className = {styles.main_content}>
        <h1 className = {styles.page_title}>Introduction</h1>
          <div className={styles.about}>
              <div className={styles.about_image}>
                  <img className = {styles.me} src="/me.jpeg" alt = "me" width = "250" height = "374"/>
                  <img className = {styles.plant} src="/image.JPG" alt = "A picture of a nice plant" width = "250" height = "374"/>               
              </div>
              <div className={styles.about_text}>
                  <p>Hi! I'm Ella Hagen, a second year <b>computer science major</b>!</p>
                  <p>At the moment, I'm planning on minoring in <i>Computing for the Interactive Arts</i>. I absolutely love all things
                      art, so I'm hoping to combine both art and computer science as much as I can. I think that there's a lot of 
                      possibilities when it comes to the combination of the two, especially when it comes to web development. Hoping to have a productive and fulfilling school year!
                  </p>
              </div>
          </div>
      </main>

  )
}
 