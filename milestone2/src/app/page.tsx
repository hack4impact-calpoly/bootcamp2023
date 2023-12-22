import Image from "next/image";
export default function Home() {
  return (
    <>
      <main>
        <h1 className="'page-title">
          &quot;All our dreams can come true if we have the courage to pursue
          them.&quot; - Walt Disney
        </h1>
        <h1>Hello friends!</h1>
        <div className="about">
          <div className="about-image"></div>
          <div className="about-text">
            <p>
              Hello my name is Tammy Si and I&apos;m a second year CS major at
              <strong> Cal Poly</strong>
            </p>
            <p>I like to read, watch sports, and play video games.</p>
          </div>
        </div>
        <Image src="/image.jpeg" alt="Scenery" width={500} height={500} />
      </main>
      <footer className="footer">
        © 2023 Tammy Si&apos;s Personal Website | All Rights Reserved
      </footer>
    </>
  );
}
