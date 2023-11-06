import Image from 'next/image'
import './globals.css'

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (<div>
    <main>
        <div className="about">
            <h1 className="page-title">Home</h1>
            <div className="flexbox">
                  <Image className="star" src={"/stars.jpg"} width={500} height={200} alt="Stars"></Image>
                <p>
                    Hi, I am Jonathan, a student a Cal Poly SLO studying Computer Science. 
                    This website is pretty bare at the moment 
                    but has all relevant info. I hope you're slightly impressed. Enjoy looking around.
                </p>
            </div>
        </div>
    </main>
</div>) 
}