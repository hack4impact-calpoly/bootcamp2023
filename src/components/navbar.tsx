import React from "react";
console.log(React);
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className={style.[whatever class name you put]} >
      <h1> Leila's Personal Website </h1>
      <nav>
        <Link href="/" >Home</Link>
        <Link href="/about" >About Me</Link>
				<Link href="/resume" >Resume</Link>
      </nav>
    </header>
  );
}