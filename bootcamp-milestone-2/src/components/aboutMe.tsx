// src/components/AboutMe.jsx
import React from 'react';
import Image from 'next/image';
import Footer from './footer';

const AboutMe = () => {
  return (
    <>
      <main>
        <h1 className="page-title">Allow Me To Reintroduce Myself.</h1>

        <div className="about-image">
            <Image src = {'/utahme.jpg'} width = {350} height = {300} alt="Me in Utah"></Image>
            {/* <img src="utahme.jpg" width="350" height="300" alt="me in utah" /> */}
        </div>

        <div className="about">
          <div className="about-text">
            <p>I am Lukas Shipley, a 20-year-old Computer Engineering major from the countryside of far north California who loves to push the boundaries of technology and explore nature in all its forms. I have a zest for life that takes me far beyond the confines of a computer screen.
              As a student in the fascinating world of Computer Engineering, I spend countless hours delving into the complexities of systems, programming languages, and cutting-edge technologies. My curiosity knows no bounds, and I am always eager to explore the next frontier of <strong>innovation</strong>.
              But what truly sets me apart is my <em>balanced</em> approach to the tech world. I have a <strong>deep passion</strong> for sports and adventure. When I`&apos;`m not immersed in lines of code, you can find me on the tennis court, the soccer pitch, riding waves while surfing, or conquering new heights through hiking and rock climbing.
              I am a technologist who embraces the outdoors and values physical well-being and a balanced lifestyle. I believe we should emulate <em>nature</em> when designing new technologies and systems. My path is just starting, and I hope we will be able to work ours together to create something <strong>remarkable</strong>.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutMe;
