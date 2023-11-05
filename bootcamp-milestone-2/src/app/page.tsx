import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="page-title">Introduction</h1>
      <div className={style["about"]}>
        <div className={style["about-image"]}>
          <Image src="/fox.jpg" alt="An image of a fox" width="250" height="250" />
        </div>
        <div className={style["about-text"]}>
          <p>
            Hi I'm <strong>Daniel</strong>! I'm a new <em>3rd year </em>
            transfer student from San Diego, CA majoring in Computer Science at Cal Poly. 
            A fun fact about me is that I can whistle through my teeth. I enjoy programming 
            and playing games.
          </p>
        </div>
      </div>
    </>
  )
}
