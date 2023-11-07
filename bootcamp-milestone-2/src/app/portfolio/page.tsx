const Page = () => {
  return (
    <div>
      <h1 className="page-title">Portfolio</h1>
      <div className="project">
        <a href="index.html">
          <img src="oakland.jpg" alt="image of oakland" />
        </a>
        <div className="project-details">
          <p className="project-name">Personal Website</p>
          <p className="project-description">
            My portfolio website with info about my background and projects I
            made.
          </p>
          <a href="index.html">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
