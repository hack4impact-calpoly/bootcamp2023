import "../globals.css";
import Image from "next/image";
import Link from "next/link";
export default function Portfolio() {
  return (
    <div>
      <main>
        <h1 className="page-title">Portfolio</h1>
        <div className="project">
          <a href="./index.html">
            <Image
              src={"/placeholderImage.jpeg"}
              height={500}
              width={500}
              alt="my personal portfolio project"
            />
          </a>
          <div className="project-details">
            <p className="project-name">My personal portfolio website</p>
            <p className="project-description">
              A personal website created for Hack4Impact
            </p>
            <Link href="/home">LEARN MORE</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
