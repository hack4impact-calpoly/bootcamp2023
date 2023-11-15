import Image from 'next/image'
import Link from "next/link";

export default function Portfolio() {
    return(
        <>
        <main>
            <h1 className="styles.portfolio-title">Portfolio</h1>
            <div className="project">
            
                <div className="project-details">
                    <p className="project-name">You're looking at it!</p>
                    <Image src="/portfolio.png" alt="my-portfolio" width={600} height={300} ></Image>
                    <p className="project-description">A forever improving portfolio website</p>
                    <Link href="/">learn more</Link>     
                </div>

            </div>
        </main>
        <br /><br />
        </>
    )
}

// <Image src="portfolio.png" alt="my-portfolio" width={500} height={500} ></Image>