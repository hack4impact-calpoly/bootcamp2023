import Image from "next/image";
import styles from "./page.module.css";
import aboutInfos from "./aboutData";
import AboutMePreviews from "./components/aboutPreview";

export default function Home() {
  return (
    <>
      <div className={styles.page_container}>
        <h1 className={styles.title}>Kyle Taschek</h1>
        {aboutInfos.map((aboutInfo) => (
          <AboutMePreviews
            title={aboutInfo.title}
            description={aboutInfo.description}
            image={aboutInfo.image}
          />
        ))}
      </div>
    </>
  );
}

{
  /* <section>
            <div className="hidden" id="name-section">
              <p className="title-name">
                <a
                  target="”_blank”"
                  href="https://www.linkedin.com/in/kyle-taschek-555923223/"
                >
                  Kyle
                  <br />
                  Taschek
                </a>
              </p>
            </div>
          </section>
          <section className="p2">
            <div className="hidden" id="about-me-section">
              <div className="about-box">
                <div className="container">
                  <Image
                    src="/kyle_plants.JPG"
                    width={500}
                    height={600}
                    alt="My Image"
                  ></Image>
                </div>
                <div className="about-text">
                  <h5>About Me</h5>
                  <p>
                    Hey All! I'm a third year computer science major at Cal
                    Poly!
                    <br />I enjoy playing video games, playing volleyball and
                    crocheting. Right now I'm working on a massive green worm
                    named Phil. And of course I love plants!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="p3">
            <div className="hidden" id="about-me-section">
              <div className="about-box">
                <div className="container" id="whale">
                  <Image
                    src="/whale.jpg"
                    width={500}
                    height={600}
                    alt="My Image"
                  />
                </div>
                <div className="about-text">
                  <h5>Crochet</h5>
                  <p>
                    I started crocheting in 2021 because my girlfriend got me
                    into it. Since then I've made a few things like this whale
                    and I have a lot more unfinished. Aside from the green worm,
                    I'm excited to start a burger snail!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="p4">
            <div className="hidden" id="about-me-section">
              <div className="about-box">
                <div className="container" id="plant">
                  <Image
                    src="/plant.jpg"
                    width={500}
                    height={600}
                    alt="My Image"
                  />
                </div>
                <div className="about-text">
                  <h5>Plants</h5>
                  <p>
                    I got my first plant from the Poly Plant shop in 2022 and I
                    haven't stopped getting them since. I still have those
                    original ones growing and I'll soon have to repot them. Let
                    me know if you have any plant recommendations!
                  </p>
                </div>
              </div>
            </div>
          </section> */
}
