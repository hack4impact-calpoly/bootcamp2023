import React from "react";
import Image from 'next/image';
import Header from "../components/header";
import Styles from "./about.module.css";

export default function About() {
    return (
        <div className={Styles.about} >
            <Header pageTitle="Welcome to My Website!"></Header>
              <div className= {Styles.aboutImage}>
                <Image src="/Profile.jpg" alt="picture of me" width={500} height={500} padding-right={50}/>
              </div>
              <div className= {Styles.aboutText}>
                  <p>I'm a second year <strong>Computer Science</strong> major at Cal Poly SLO who is 
                     pursuing a minor in <em>economics</em>! I have a lot of experience with front-end development, 
                     but I am currently interested in <strong>A.I.</strong> I am passionate about using my CS skills to inspire young, 
                     particularly female, coders and to give back to the community!
                  </p>
              </div>
        </div>
    );
  }