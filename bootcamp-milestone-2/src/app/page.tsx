import Image from "next/image";
import Link from "next/link";
import style from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
    <div>
      {/* content goes here */}
      <main>
        <div className={style.about}>
          <div className={style.aboutImage}>
            <Image
              src={"/TempPFP.jpg"}
              alt="Profile Picture"
              width={200}
              height={150}
            ></Image>
          </div>
          <div className={style.aboutText}>
            <h1 className={style.pageTitle}>About</h1>
            <p>
              Hello, my name is <strong>Sean Nguyen (he/him/his)!</strong> I am
              currently a <em>second year</em> student at Cal Poly San Luis
              Obispo majoring in <strong>Computer Science</strong> with a
              concentration in AI and Machine Learning.
            </p>
            <p>
              This quarter, I am studying Software Engineering abroad in the
              city where all roads lead, <em>Rome!</em>
            </p>
            <p>
              Aside from academics, I love music, ranging from classical piano
              to contempoary chord sheets, swimming—or anything aquatic,
              really—and expanding my flavor palette. Oh, and I can make{" "}
              <em>pho</em> :)
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
