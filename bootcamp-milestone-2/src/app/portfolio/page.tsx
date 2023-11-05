import React from "react"
import Image from 'next/image'

export default function Portfolio() {
    return (
        <>
            <main>
            <div className="project">
                <div className="project-details">
                <p className="project-name"><b>This Website</b></p>
                <div className="box2">
                        <Image src={"/website_shot.png"} alt="Picture of Website" height={200} width={250}></Image>
                        <p>Used HTML, CSS.  <a href="https://github.com/SumedhaKun/SumedhaKun.github.io">Github</a></p>
                </div>
                </div>
            </div>

            <div className="project">
                <div className="project-details">
                <p className="project-name"><b>Vybe</b></p>
                <div className="box2">
                    <Image src={"/vybe_2.png"} alt={"Picture of vybe"} width={250} height={200}></Image>
                    <p>Used Python, JupyterLab, etc.  <a href="https://github.com/SumedhaKun/Vybe">Github</a></p>
                </div>
                </div>
            </div>

            <h1 className="portfolio"></h1>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  