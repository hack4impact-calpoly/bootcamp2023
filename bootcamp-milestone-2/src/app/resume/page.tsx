import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./resume.module.css";

export default function MyResume() {
    return(
        <div>
            <main>
                <h1 className="page-title">My Resume</h1>
                <Link href="/Ivan_Alvarez_CPE_Resume.pdf" className={styles.resume_link} download>Download Resume</Link>
                <div className="resume"> 
                    <Image src="/Ivan_Alvarez_CPE_Resume.png" alt="resume" width="800" height="1000" className={styles.resume_pic}/>
                </div>
            </main>
        </div>
    )
}