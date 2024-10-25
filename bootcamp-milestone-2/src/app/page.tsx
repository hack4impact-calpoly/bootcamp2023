import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="page-title">About Myself</h1>
        <div className="about">
          <div className="about-image">
            <img
              src="./professional.jpeg"
              alt="A professional photo of myself"
            />
          </div>
          <div className="about-text">
            <p>
              Hello! I&apos;m Ivan Alvarez, a third year student at Cal Poly majoring in{" "}
              <strong>Computer Engineering</strong>.
            </p>
            <p>
              Some of my hobbies are{" "}
              <strong>weightlifting and hiking.</strong>{" "}
            </p>
            <p>
              A fun fact about me is that I have built{" "}
              <strong>3 gaming computers!</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
