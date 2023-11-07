import React from "react";
import style from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={style.footerStyle}>
        <p className="footerText">
          © 2023 Kayla's Personal Website | All Rights Reserved
        </p>
    </div>
  );
}
