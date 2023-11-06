import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.navbar} >
      <h1> Leila's Personal Website </h1>
      <nav>
        <a href="/" >Home</a>
        <a href="/about" >About Me</a>
				<a href="/resume" >Resume</a>
      </nav>
    </header>
  );
}