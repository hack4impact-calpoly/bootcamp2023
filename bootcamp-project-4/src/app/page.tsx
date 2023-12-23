import React from "react";
import style from "./page.module.css";


export default function Home() {
  return (
    <main>
      <div></div>
      <h1 className={style.page_title}> Hello & Welcome! </h1>
      <div className={style.about}>
        <div className={style.about_image}>
          <img
            src="/me.jpg"
            alt="A picture of me hiking in the woods"
            height="300"
            width="200"
          />
        </div>
        <div className={style.about_text}>
          <p>
            My name is <strong>Grace</strong> and I am a freshman
            <em> computer science</em> major
          </p>
        
          <p className={style.about_textp}>
            My hobbies include: <br />
            -hiking
            <br />
            -photography <br />
            -hammocking
            <br />
            -hanging with friends
          </p>
          <h3>Enjoy exploring my website!</h3>
        </div>
      </div>
    </main>
  );
}
