// import linkedinIcon from './images/icons/linkedin.png'; // Adjust the path as needed
// import githubIcon from './images/icons/github.png';    // Adjust the path as needed
// import mailIcon from './images/icons/mail.png';       // Adjust the path as needed
import  Style  from './page.module.css';

export default function Home() {
  return (
    <div id={Style.particleJs}>
      <section className={Style.homeContainer}>
        <h2>Noah Giboney</h2>
        <div id={Style.line}></div>
        <div className={Style.socialsContainer}>
          <a href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank" rel="noopener noreferrer">
            <img src={'./images/icons/linkedin.png'} id="round" alt="LinkedIn" />
          </a>
          <a href="https://github.com/noahgiboney" target="_blank" rel="noopener noreferrer">
            <img src={'./images/icons/github.png'} alt="GitHub" />
          </a>
          <a href="#contact">
            <img src={'./images/icons/mail.png'} alt="Email" />
          </a>
        </div>
      </section>
    </div>
  )
}
