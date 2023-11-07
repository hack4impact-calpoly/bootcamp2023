import React from "react"
import Image from 'next/image'
import Link from "next/link";


export default function Home() {
  return (
    <>
        <main>
            <h1></h1>
            <div className="spaced-box">
            </div>
            <div className="container">

            </div>
            <div className="about">
                <div className="box">
                    <div className="about-image">
                        <Image src={"/prof.png"} alt={"Picture of Me"} height={250} width={200}></Image>
                    </div>
                    
                </div>
                <div className="spaced-box">
                </div>
                <div className="about-text">
                    <p>
                      Hi! I am Sumedha Kundurthi, a first year <b>Computer Science Student</b> at <br></br>California Polytechnic State University, SLO.
                    </p>
                    <p><a href="https://github.com/SumedhaKun">Github</a>
                        <a href="https://www.linkedin.com/in/sumedha-kundurthi-514013235/">LinkedIn</a></p>
                    
                  </div>
                
              </div>
        </main>
        <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
    </>
  )
}
