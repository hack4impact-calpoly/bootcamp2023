import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
    return (
      // replace everything in between the <header> & <header /> tags
      // with your navbar code from your earlier milestones
      // Its going to go to the css styles and use the footer css section and hash that to our className for our class
      <footer className={styles.footer} > 
            © 2023 Taran Singh&apos;s Personal Website | ਤਰਨ ਸਿੰਘ ਨੌਰਾ ਵਾਲਾ | All Rights Reserved 
      </footer>
    );
  }