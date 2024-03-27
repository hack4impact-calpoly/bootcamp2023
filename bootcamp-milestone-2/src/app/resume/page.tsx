import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function MyResume() {
    return(
        <div>
            <main>
                <h1 className="page-title">My Resume</h1>
                <Link href="/Ivan_Alvarez_CPE_Resume.pdf" download>Download Resume</Link>
                <div className="resume"> 
                    <Image src="/Ivan_Alvarez_CPE_Resume.png" alt="resume" width="800" height="1000"/>
                </div>
            </main>
        </div>
    )
}