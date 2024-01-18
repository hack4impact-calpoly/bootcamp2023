// You can name the function within page.tsx anything you want.

export default function Home() {
  return (
    <div className="about">
      <div className="about-image">
        <img src="oakland.jpg" alt="picture of oakland" />
      </div>
      <div className="about-text">
        <h1 className="page-title">Ida's Personal Website</h1>
        <p>
          My name is <strong>Ida Voong</strong> and I'm a second year Computer
          Science major at Cal Poly SLO.
        </p>
        <p>
          I'm from the <em>Bay Area</em> and I spent most of my time growing up
          there.
        </p>
      </div>
    </div>
  );
}
