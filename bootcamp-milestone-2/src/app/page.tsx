import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="about">
          <div className="about-image">
            <Image
              src="/badge.png"
              width={500}
              height={300}
              alt="A video of an image of the sky and clouds being too
          big"
            />
          </div>
          <div className="about-text">
            <h1>Welcome!</h1>
            <p>
              Hi, my name is <strong>Matthew Bosio</strong> and welcome to my
              personal portfolio! I am a third year
              <strong> Computer Science</strong> student at Cal Poly, San Luis
              Obispo. I have career interests in building
              <strong> full-stack web applications</strong> and
              <strong> video game development</strong>. Outside of technology I
              enjoy playing basketball, running, hiking, and hanging out with
              friends.
            </p>
          </div>
        </div>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}
