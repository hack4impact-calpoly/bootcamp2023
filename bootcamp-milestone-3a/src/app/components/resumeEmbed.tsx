import React from "react";
import styles from "./footer.module.css";

export default function PdfViewer() {
    return (
        <div>
            <iframe
            src="/PDFs/resume100.pdf"
            width="850"
            height="1130"
            ></iframe>
        </div>
    )
}

