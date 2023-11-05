import React from 'react';
import Image from 'next/image'


export default function Portfolio() {
  return (
    <div>
        <main>
            <h1 className="page-title">Portfolio</h1>
            <div className="project">
                <a href="index.html">
                <Image src={"/website_screenshot.png"} width={1900} height={500} alt="An image of website"></Image>
                    
                </a>
                <div className ="project-details">
                    <p className="project-name">Shuya's website</p>
                    <p className="project-description">This is a website created for Hack4Impact</p>
                </div>
                <a href="index.html">LEARN MORE</a>

            </div>
        </main>
        
    </div>
  );
}
