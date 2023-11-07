import React from 'react';
import style from './yosemite-hike.module.css';
import Image from 'next/image';

export default function Yosemite() {
  return (
      <div>
        <main>
            <h1 className="page-title">Yosemite Hike</h1>
            <div className="hike-description">
                These are some photos I took on my most recent hike!<br></br>
                I went to Yosemite National Park this summer and it was one<br></br>
                of the longest hikes that I have ever done.
            </div>
            <div className="hikes">
                <Image
                src="/hike1_1.jpg"
                alt="image 1 of my most recent hike"
                width="750"
                height="1000"
                />
                <Image
                src="/hike1_2.jpg"
                alt="image 2 of my most recent hike"
                width="750"
                height="1000"
                />
                <Image
                src="/hike1_3.jpg"
                alt="image 3 of my most recent hike"
                width="750"
                height="900"
                />
            </div>
        </main>
      </div>
  );
}