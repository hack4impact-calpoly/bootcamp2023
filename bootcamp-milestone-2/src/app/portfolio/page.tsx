import Image from "next/image"
import Link from "next/link"
export default function PortfolioPage() {
    return (
        <>

            <main>
                <h1 className="page-title">Portfolio Page</h1>
                <div className="project">
                    <Link href="/">
                        <Image src="/CalPolySLOImage.jpg " alt="websiteScreenshot" width={500} height={500}/>
                    </Link>

                    <div className="project-details">
                        <p className="project-name text-black">My Personal Website</p>
                        <p className="project-description text-black">My personal website made using HTML and CSS through
                            Hack4Impact's
                            Stater Pack</p>
                        <Link href="/"> Learn More </Link>
                    </div>
                </div>
            </main>
        </>
    )
}