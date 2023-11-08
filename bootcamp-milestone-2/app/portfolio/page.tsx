export default function Portfolio() {
  return (
    <main>
      <h1 className="page-title">Portfolio</h1>
      <div className="portfolio">
        <div className="project">
          <div className="project-image">
            <a href="index.html">
              <img
                src="personalwebsiteimage.png"
                alt="A picture of my personal website"
              />
            </a>
          </div>
          <div className="project-details">
            <p className="project-name">Personal Website</p>
            <p className="project-description">
              Designed and built a personal website using HTML and CSS
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
