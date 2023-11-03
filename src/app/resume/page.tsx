import Image from "next/image";
import styles from "@/app/resume/page.module.css"

export default function Resume() {
    return (
        <div className={styles.container}>
            <Image src={"/resume.png"} className="Resume Image" width={650} height={780} alt="Image of Resume"></Image>
        </div>
    )
}