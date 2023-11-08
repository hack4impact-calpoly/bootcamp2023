// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <main>
      <h1 className="page-title">About Me!</h1>
      <div className="about">
        <div className="about-image">
          <img src="golf.jpeg" alt="A picture of my favorite golf course." />
        </div>
        <div className="about-text">
          <p>
            Hi! My name is <strong>Sohini</strong> and I am a second year CS
            major at Cal Poly. Apart from CS, my interests and hobbies include{" "}
            <em>golf, traveling, reading, gymnastics</em> and{" "}
            <em>spending time with my friends and family.</em> <br />I am
            excited for fall quarter and this school year.
          </p>
        </div>
      </div>
    </main>
  );
}
