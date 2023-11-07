import React from 'react';
import style from './avila-hike.module.css'
import Image from 'next/image'

export default function Avila() {
  return (
      <div>
        <main>
        <h1 className="page-title">Avila Hike</h1>
        <div className="hike-description">
          These are some photos I took on my hike by Avila Beach!<br></br>
          The trail is called Avila Ridge trail and I went with a <br></br>
          couple of friends. 
        </div>
        <div className="hikes">
            <Image
            src="/avila-hike-0.jpg"
            alt="image 1 of my most recent hike"
            width="750"
            height="1000"
            />
            <Image
            src="/avila-hike-1.jpg"
            alt="image 2 of my most recent hike"
            width="750"
            height="800"
            />
            <Image
            src="/avila-hike-2.jpg"
            alt="image 3 of my most recent hike"
            width="750"
            height="900"
            />
        </div>
        </main>
      </div>
  );
}