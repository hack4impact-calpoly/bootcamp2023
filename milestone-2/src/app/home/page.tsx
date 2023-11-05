import React from "react";
import Image from "next/image";
export default function Home() {
    return(
        <main>
            <h1 className="page-title">Aarav's Website</h1>
            <div className="about">
                <div className="about-text">
                    <p>Hello my name is <strong>Aarav Sharma</strong> and I am from Fremont, CA. I am a second year <em>computer science</em> major at Cal Poly.</p>
                    <p>My <strong>hobbies</strong> including playing basketball, playing the flute, hiking, and exploring the outdoors.</p>
                </div>
                <div className="about-images">
                    <Image src="./images/computer-science.jpeg" alt = "Image of Programming"/>
                    <a className="rickroll" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <Image src="./images/click-here.jpeg" alt="Click Here"/>
                    </a>
                    <Image src="./images/AI.jpeg" alt = "Image of AI"/>
                </div>
                <div className="interest-images">
                    <Image src="./images/basketball.jpeg" alt = "Image of Basketball"/>
                    <Image src="./images/space.jpg" alt = "Image of Nebula"/>
                    <Image src="./images/hiking.jpeg" alt = "Image of Mountain"/>
                </div>
                
            </div>
        </main>
    )
}