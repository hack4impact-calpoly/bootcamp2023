import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Resume () {
    return <main>
        <h1 className="page-title">Resume</h1>
        <Link href="/resume.pdf" download >Download Resume</Link>
        <div className="resume">
            <section className="section"></section>
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Bachelor of Science in Computer Science</h3>
                    <p className="entry-info">California Polytechnic University, San Luis Obispo | Expected graduation June 2025</p>
                </div>
            <section className="section"></section>
                <h2 className="section-title">Coursework</h2>
                <ul className="course-list">
                    <li>Hack4Impact HTML, CSS & Git starter pack</li>
                    <li>Systems Programming</li>
                    <li>Discrete Structures</li>
                    <li>Design and Analysis of Algorithms</li>
                    <li>Project-Based Object-Oriented Programming and Design</li>
                    <li>Data Structures</li>
                    <li>Introduction to Computer Organization</li>
                </ul>
            <section className="section"></section>
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list">
                    <li>Python</li>
                    <li>C</li>
                    <li>Java</li>
                    <li>RISC-V</li>
                </ul>
            <section className="section"></section>
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">Personal Website</h3>
                    <p className="entry-info">Designed and built a personal website using HTML and CSS.</p>
                    <p className="entry-description">- Implemented multiple pages using HTML and CSS<br/>- Focused on semantic HTML design<br/>- Used best practices for Git and Github</p>
                </div>
            <section className="section"></section>
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">N/A</h3>
                    <p className="entry-info"></p>
                    <p className="entry-description"></p>
                </div>

        </div>
    </main>
}
