import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <h1>About</h1>
        <div className="about">
          <div className="about-image">
            <Image
              src={"/Angela.jpg"}
              width={200}
              height={280}
              alt="A picture of Angela Chen"
            ></Image>
          </div>
          <div className="about-text">
            <p>
              I am a 2nd year
              <strong> Computer Science B.S.</strong> student at California
              Polytechnic University, San Luis Obispo. Currently, I am taking{" "}
              <em> Systems Programming (CSC 357)</em> and
              <em> Discrete Structures (CSC 248)</em>. Some relevant coursework
              I have taken in the past includes
              <em> Data Structures (CSC 202)</em> and
              <em> Project-Based Object Oriented Programming (CSC 203)</em>.
            </p>
            <p>
              I am interested in learning about mobile and web development, as
              well as human-computer interaction. The field of mixed
              reality/VR/AR also excites me because of its intersection of arts
              and computing. In my spare time, I love to dance.
            </p>
          </div>
        </div>
      </main>
      <footer className="footer">
        © 2023 Angela Chen | All Rights Reserved
      </footer>
    </>
  );
}
