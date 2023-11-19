import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={style.footer}>
        {" "}
        <p>© 2023 Grace's Website | All Rights Reserved</p>
      </div>
    </footer>
  );
}
