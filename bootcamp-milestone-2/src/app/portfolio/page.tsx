import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
    return (
        <main>
        <h1 className="page-title">My Portfolio!</h1>
        <div className="project">
                <Link href="/">
                    <Image src={'/personal_website_ss.png'} width={700} height={375} alt='image of website'></Image>
                </Link>
                    <div className="project-details">
                        <p className="project-name"><strong>Amanda Chan's Personal Website</strong></p>
                        <p className="project-description">My personal website created in Visual Studio Code using HTML and CSS</p>
                        <Link href="/"><strong>Learn More!</strong></Link>
                        <br></br>
                        <br></br>
                    </div>
        </div>
    </main>
    )
}