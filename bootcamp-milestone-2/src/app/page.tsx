import React from "react";
import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (<div>
			<main>
            <h1>Welcome to my First Website!</h1>
            <div className={style.about}>
                <div className={style["about-image"]}>
                    <Image src="images/profile.jpg" alt="A silly profile picture. Me posing with a random cat" />
                    <figcaption>This is a random cat I found</figcaption>
                </div>
                <div className={style["about-text"]}>
                    <p>Hi! My name is <strong>James Torres</strong>, and I'm currently a second year Computer Engineer at <strong>Cal Poly, San Luis Obispo</strong>. </p>
                    <p>I'm from Vacaville, CA, and I find joy in activities such as swimming, hitting the gym, and sharing life's adventures with my friends and family.</p>
                    <p>This year, I am excited to further explore the realm of computing, with all its intricate challenges. Furthermore, I'm <em>incredibly</em>
                        enthusiastic about the prospect of creating meaningful projects with H4I this year!</p>
                </div>
                <div className={style["about-image2"]}>
                    <Image src="images/profile2.jpg" alt="A picture of me by a pond." />
                </div>
            </div> 
        </main>
			</div>) 
}