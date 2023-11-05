import style from "./home.module.css";
import Image from "next/image";

export default function Home() {
 
  return (
  <div className={style.home} style={{backgroundColor : "#1f3e74"}}>
    <main style={{textAlign: 'center', paddingBottom: '4%'}}>
      <h1 className={style.pageTitle} style={{paddingTop: '3%'}}>Welcome to my website!</h1>
      <div>
        {/* Images will be in public you have to import nexts image then specify width and height*/}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image id="about-image" className={style.aboutImage} src="/ProfileImage.png" 
                  width={600} height={600} alt="profile image" style={{borderRadius: '5%', textAlign: 'center'}} />
        </div>
        <div className={style.aboutText} style={{fontSize: '19px'}}>
          <p>
            My name is Holden Evers I am third year <strong>software engineering major</strong> at the University of California Polytechnic State Universty. 
            I am from Monterey California, where I have lived my whole life. In the context of programming I am most confortable in 
            <strong>Java programming</strong> and frameworks such as <strong>Spring</strong>, but have I also know <strong>HTML, CSS, 
            and Python</strong>. Outside the realm of programming and computer science I love to garden, excerice, and almost anything that has to do with the outdoors. 
          </p>
        </div>
      </div>
    </main>
  
    <footer className={style.footer} style={{}}> 
      <p>© 2023 Personal Website Name | All Rights Reserved</p> 
    </footer>
  </div>
  )

}

