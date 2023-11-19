import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <div className={styles.footer_name}>
        <footer>Copyright 2023 My Personal Website | All Rights Reserved</footer>
    </div>
  );
}

