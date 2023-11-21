import { GetServerSideProps } from 'next';
import linkedinIcon from 'images/icons/linkedin.png'; 
import githubIcon from 'images/icons/github.png';    
import mailIcon from 'images/icons/mail.png';  
import style from '@/styles/index.module.css'
import faceShot from 'images/faceShot.png';
import VantaFog from '@/components/VantaFog/vantaFog';
import PortfolioSection from '@/components/Portfolio/portfolio';
import BlogPreview from '@/components/Blog/BlogPreview';
import Blog from '@/database/blogSchema';
import connectDB from '@/database/helpers/db';
import { IBlog } from '@/database/blogSchema';

interface HomeProps {
  blogs: IBlog[];
}

export default function Home({blogs}: HomeProps) {

  return (
    <div>
      <div className={style.vantaContainer}>
      <VantaFog/>
        <section className={style.homeContainer}>
          <h2>Noah Giboney</h2>
          <div className={style.socialsContainer}>
            <a href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank">
              <img src={linkedinIcon.src} className="round" alt="LinkedIn"/>
            </a>
            <a href="https://github.com/noahgiboney" target="_blank">
              <img src={githubIcon.src} className="round" alt="GitHub"/>
            </a>
            <a href="#contact">
              <img src={mailIcon.src}  className="round" alt="Email"/>
            </a>
          </div>       
        </section>
      </div>
      <div className={style.mainContainer}>
        <h3 id="about">About</h3> 
        <div className={style.purpleLine}></div>
        <section className={style.aboutContainer}> 
          <div className={style.innerAboutContainer}>
            <div className={style.textContainer}>
              <h2>My name is <span className="name">Noah Giboney</span></h2>
              <p>I'm a computer science major at Cal Poly, San Luis Obispo.</p>
              <p>Currently interested in iOS Development and Software Engineering</p>
              <p>Connect with me on <a href="https://www.linkedin.com/in/noah-giboney-896847261/" className="link">LinkedIn</a> and check out my projects below</p>
            </div>
            <div className={style.faceShotContainer}>
              <img src={faceShot.src} alt="Noah Giboney" />
            </div>
          </div>
          <BlogPreview blogs={blogs}/>
        </section>

        <h3 id="portfolio">Portfolio</h3>
        <div className={style.purpleLine}></div>
        
        <PortfolioSection/>

        <h3 id="contact">Contact</h3>
        <div className={style.purpleLine}></div>
        <section className={style.contactContainer}>
          <p>Feel free to reach out to me on <a href="https://www.linkedin.com/in/noah-giboney-896847261/" className="link">LinkedIn</a>, also available through email at <a href="mailto:noahgiboney@gmail.com" className="link">noahgiboney@gmail.com</a>.</p>
          <p>↓ Check out my Resume below ↓</p>
          <div className={style.buttonContainer}>
            <a className={style.button} href="documents/Noah Giboney Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a className={style.button} href="https://github.com/noahgiboney" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className={style.button} href="https://www.linkedin.com/in/noah-giboney-896847261/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  await connectDB();

  let blogs: IBlog[] = [];
  try {
    blogs = await Blog.find().sort({ date: -1 }).lean();
  } catch (err) {
    console.error('Error fetching blogs:', err);
  }

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
};
