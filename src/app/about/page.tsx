import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function About () {
return <main>
  <h1 className="page-title">Welcome to my website :)</h1>
  <div className="about">
    <div className="about-image" >
        <Image
          src="/mypic.JPG"
          alt="Photo of me"
          height="666"
          width="375"
        />
      <div className="about-text">
        <p>
          Hi, I'm <strong>Charles</strong> and I'm currently a 3rd year
          computer science student at <em>California Polytechnic State University, 
            San Luis Obispo</em> looking to embark on my first internship to apply the skills that
          I have learned from school.<br/>My passions include reading,
          basketball, working out, camping, traveling/exploring new areas,
          and hiking.
        </p>
      </div>
    </div>
  </div>
  <section></section>
  <section></section>
  <section></section>
  <section></section>
  <section></section>
</main>
}