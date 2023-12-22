import React from "react";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.footerStyle}>
      <p className={style.footerText}>
        © 2023 Kayla&apos;s Personal Website | All Rights Reserved
      </p>
    </div>
  );
}
