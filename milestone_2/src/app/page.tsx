import React from 'react';
import Image from 'next/image'


export default function Home() {
  return (
    <div>
        <main>
        <h1>Hello world!</h1>
        <div className="about">
          <div className="about-image">
            <Image src={"/mountain.jpg"} width={1900} height={500} alt="An image of mountain"></Image>
          </div>
          <div className="about-text">
            <p>
              I am a <em>a 2nd year Computer Science major</em> from  
              <strong>Los Altos, California.</strong> 
            </p>
            <p>
              My interests include soccer, basketball, video games, watching the nba, and coding!
            </p>
          </div>
        </div>
        </main>
        
    </div>
  );
}
