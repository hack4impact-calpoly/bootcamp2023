import Image from 'next/image'
import "../globals.css"
import Link from "next/link";

export default function Home() {
  return (<div>
            <main>
            <h1 className="page-title">Portfolio</h1>
            <div className="flex-container">
                <div className="portfolio">
                    <Image className="gallo" src={"/Gallo.jpg"} width={200} height={350} alt="E & J Gallo"></Image>
                    <p>
                        <strong>Internship at E & J Gallo | June - August 2023</strong><br></br>
                        At Gallo I learned how to work in a professional environment and contribute to 
                        ongoing projects in a team setting. I assisted in development of a CI/CD pipeline 
                        that sought to automate the pushing of IICS taskflows to production. I utilized 
                        Python, AWS Lambda & Aurora, GitLab, and IICS when constructing the pipeline.
                    </p>
                </div>
                <div className="portfolio">
                    <Image className="website" src={"/website.jpg"} width={400} height={450} alt="personal website"></Image>
                    <p>
                        <strong>Personal Website</strong><br></br>
                        This is my personal website which you are obviously on. Check it out. 
                        I am trying to break into front-end a little, doing some JS and React. It's 
                        pretty cool making this stuff and checking it real-time in your browser. 
                        What do you think? Right now I just know the HTML/CSS aspect of web dev. 
                    </p>
                </div>
                <div className="portfolio">
                    <Image className="joke" src={"/joke.jpg"} width={400} height={450} alt="joke"></Image>
                    <p>
                        <strong>First Ever Project</strong><br></br>
                        My first ever personal project was a "Yo mama" joke generator. Really basic but 
                        if you have access to an IDE and a minute clone this repo on my <Link href="https://github.com/jmdebarro" target="_blank">GitHub</Link>, 
                        it's pretty fun. It uses every noun and adjective so it never makes sense and 
                        it's horribly made, but it has sentimental value.
                    </p>
                </div>
            </div>
        </main>
  </div>
  )
}
