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
              I am Ivan Alvarez, a second year student at Cal Poly majoring in{" "}
              <strong> Computer Engineering</strong>.
            </p>
            <p>
              I am a very physically active person and I love to{" "}
              <strong>weightlift and hike.</strong>{" "}
            </p>
            <p>
              A fun fact about me is that I have built{" "}
              <strong>3 gaming computers!</strong>
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        © 2023 Ivan Alvarez's Website | All Rights Reserved
      </footer>
    </div>
  );
}
