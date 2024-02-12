// You can name the function within page.tsx anything you want.
// import React from 'react';
// import navbar from '@/components/navbar.module.css';
// import './page.module.css';
import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar"
import Image from "next/image"
// import BlogPreview from "@/components/blogPreview"
import BlogPreview from "@/app/components/blogPreview";
import Footer from "../app/components/footer";
import styles from "./page.module.css";
import { text } from "stream/consumers";

export default function Home() {
    // return (<div>
    //               <head>
    //     {/* <header>className={style.navbar}</header> */}
    //     <title>Rhoyalinn Cereno's Website</title>
    // </head>
    return(
        <main>
        <Navbar/>
        <h1 className={styles.headertext}>Welcome to My Website!</h1>
            <div className={styles.about}>
                <div className={styles.img}>
                    <Image src={"/chillselfie.jpg"} alt="Picture of me" width={300} height={520}/>
                </div>
                <div className={styles.abouttext}>
            <p><strong>Hello! My name is Rhoyalinn Cereno!</strong></p>
            <p>I am a <strong>software engineering</strong> major student at Cal Poly! A few of my hobbies include hiking, working out, painting, and drawing.</p>
            <p>I'm from Grover Beach, California. I am looking forward to applying for the <strong>Hack4Impact</strong> team.</p>
            </div>
            </div>
        <Footer/>
        </main>
        
    );
  }
