import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={style.navigation}>
    <ul> 
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
    </header>
  );
}
        