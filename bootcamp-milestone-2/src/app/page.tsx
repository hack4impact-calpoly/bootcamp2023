import Navbar from "@/components/navbar";
import styles from "./page.module.css";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <main>
        <h1 className="index">Ethan Mankins' Index</h1>
        <div className="about">
          <div className="about-image">
            <Image
              src={"/CPLogo.png"}
              width={200}
              height={200}
              alt="CP Logo"
            ></Image>
          </div>
          <div className="about-text">
            <p>
              Hi, my name is <strong>Ethan Mankins</strong>. I am from Spokane,
              Washington. I'm a 4th year in computer engineering. Fun fact about
              me is that I still live on campus as a <em>4th year...</em> My
              hobbies are cooking, going to the beach (and often cooking), and
              playing video games. I usually play competitive FPS like Apex or
              Destiny 2.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
