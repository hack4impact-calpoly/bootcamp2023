import React from "react";
import style from "./about_me.module.css";

export default function AboutMe() {
    return (
        <section className={style.about_me}>
        <div className={style.text_box}>
        <h1>About Me</h1><p className={style.p}></p>
        <h3><p className={style.p}> Heyo, I computer engineering student, who is a highly motivated individual seeking to use programming and analytical skills to create meaningful impact. I am a quick learner and intrested in the field of software development.</p> 
            
            <p className={style.p}> Over the years I have been working with Cal Poly CCI as a discord developer where I maintain their support ticket system for their CTF like events </p>
            
            <p className={style.p}> In my free time, I when I am not coding like cooking, playing video games and I recently got into rock climbing </p>
        </h3>
        </div>    
        </section>
    );

}