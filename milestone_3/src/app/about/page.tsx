import Image from 'next/image'
import styles from './page.module.css'
import PageTitle from "@/components/page-title";


export default function About() {
  return (
    <div>
        <main>
            <PageTitle title="About"/>
    
                
                <div className="about">
                    <div className="about-image">
                        <Image src="/profile_pic.png" alt="dumpling" width="600" height="600"/>
                    </div>
                    <div className="about-text">
                    <h2>
                        A bit more about me!
                    </h2>
                    <p>
                        I started self teaching myself coding during my Senior year of highschool and have grown to enjoy the problem solving aspects of Computer 
                        Science. Since then, I've learned a vast range of languages and frameworks and am hopeful to apply these skills to bigger projects that 
                        have a greater impact on others.
                        
                    </p>
                    <p>
                        Outside of CS, I enjoy playing all types of racket/paddle sports. I've been playing tennis since I was 7, but I've been picking up table tennis, 
                        badminton, and pickleball lately and actually am taking a pickleball class at SLO. I also go swimming to destress
                        and occasionally go rock climbing. Back home, I really enjoy thrifting, but I still have yet to go to the 
                        bins. Some of my favorite drinks include sparkling water, iced americanos, and honey jasmine milk teas. Favorite struggle meal 
                        is frozen MamaLu's dumplings (resturaunt in Monterey Park). I used to play a lot of games, but now I just play Honkai Star Rail and occasionally TFT.
                        Some of my favorite artists include IU, Twice, and Niki and I've been to around 7 concerts in 2023. Nice to meet yall.
                    </p>
                    </div>
                </div>
            </main>
    </div>

  )
}