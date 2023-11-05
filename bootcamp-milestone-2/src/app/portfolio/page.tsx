import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <h1 className="page-title">Portfolio</h1>
      <div className={style.project}>
        <Link href="./">
          <Image src="/webfront.PNG" alt="Logo of a website" width="5000" height="5000" />
        </Link>
        <div className={style["project-details"]}>
          <p className={style["project-name"]}>Personal website</p>
          <p className={style["project-description"]}>A website created with the Hack4Impact starter pack</p>
          <Link href="./">Learn more</Link>
        </div>
      </div>
    </>
  )
}