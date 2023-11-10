import React from "react";
import Style from "./page.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (<div>
		 <main>
            <h1 className={Style["page-title"]}>Portfolio</h1>
            <div className={Style["projects"]}>
                <a href="index.html"> <Image src="images/website.png" alt="picture of website homepage" /> </a>
                <div className={Style["project-details"]}>
                    <p className={Style["project-name"]}><em><strong>My Personal Website</strong></em></p>
                    <p className={Style["project-description"]}>This personal website was created as part of the Hack4Impact starter pack</p>
                    <a href="index.html"><strong>Visit Here</strong></a>
                </div>
                    <a href="https://github.com/jam-kt/PacMan"> <Image src="images/pacman.png" alt="screenshot from pacman project showing gameplay" /> </a>
                    <div className={Style["project-details"]}>
                        <p className={Style["project-name"]}><em><strong>PacMan Remake</strong></em></p>
                        <p className={Style["project-description"]}>A remake of the 2D game classic, PacMan! Built in Java without any game engines</p>
                        <a href="https://github.com/jam-kt/PacMan"><strong>Visit Here</strong></a>
                    </div>
                <Image src="images/basys.jpg" alt="stock image of a basys3 FPGA board" />
                <div className={Style["project-details"]}>
                    <p className={Style["project-name"]}><em><strong>FPGA Digital Kitchen Timer</strong></em></p>
                    <p className={Style["project-description"]}>A versatile kitchen timer with variable input, start, and reset functionality: all packaged as a FPGA using SystemVerilog</p>
                </div>
            </div>
            
        </main>	
			</div>) 
}