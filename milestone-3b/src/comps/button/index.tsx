"use client";

import React from "react";
import styles from "./index.module.css";

interface ButtonProps {
  text: string;
  onPress: () => void;
  download: boolean;
}

const downloadResume = () => {
  const pdfUrl = "../../../Robert_Vermeulen_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Robert_Vermeulen_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Button = ({ text, onPress, download }: ButtonProps) => {
  if (download) {
    return (
      <button className={styles.button} onClick={downloadResume} type="button">
        {text}
      </button>
    );
  }
  return (
    <button className={styles.button} onClick={onPress} type="button">
      {text}
    </button>
  );
};

export default Button;
