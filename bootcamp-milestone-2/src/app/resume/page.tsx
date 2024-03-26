import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function MyResume() {
    return(
        <div>
            <main>
                <h1 className="page-title">My Resume</h1>
                <Link href="/resume_a.pdf" download>Download Resume</Link>
                <div className="resume"> 
                    <Image src="/resume_a-1.png" alt="resume" width="800" height="1000"/>
                </div>
            </main>
        </div>
    )
}