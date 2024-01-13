import React from "react";
import style from "./footer.module.css";
import Link from 'next/link';

export default function Footer() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <footer className={style.footer}>© 2023 Charles Moreno | All Rights Reserved</footer>
  );
}