import Navbar from '@/components/navbar'
import "../../styles/styles.css"

export default function Home() {
  return (
    <div>
      <main>
        <h1>Hi. My name is <span className='period'>Sahith Karra</span>.</h1>
        <div className='container'>
          <p className='intro'>I am a 2nd year computer science student at California Polytechnic University, San Luis Obispo. I love to stay active and you can often times find me running, biking, swimming, or playing basketball. I was born and raised in Fremont, CA. I am currently taking CSC 349, Math 244, BIO/BMEd 213, and PHYS 142. This webiste was created as a part of the Hack4Impact bootcamp ans was built using React and NextJS!</p>
          <img className='round-img' src='sahith-karra.jpg' alt='Portrait of Sahith Karra' width='400'/>
        </div>
      </main>
    </div>
  )
}
