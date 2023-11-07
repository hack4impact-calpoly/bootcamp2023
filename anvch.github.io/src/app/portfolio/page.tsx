import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="page-title">Portfolio</h1>
        <div className="project">
          <a href="index.html">
            <Image
              src={"/website.png"}
              width={640}
              height={291}
              alt="A picture of Angela Chen's personal website."
            ></Image>
          </a>
          <div className="project-details">
            <p className="project-name">
              <strong>Personal Website</strong>
            </p>
            <p className="project-description">
              A website created following Hack4Impact's Starter Pack on HTML and
              CSS
            </p>
            <a href="index.html">Learn More</a>
          </div>
        </div>
      </main>
      <footer className="footer">
        © 2023 Angela Chen | All Rights Reserved
      </footer>
    </>
  );
}
