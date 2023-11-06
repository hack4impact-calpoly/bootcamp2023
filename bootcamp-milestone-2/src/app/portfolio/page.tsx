import portrait from "../images/portrait.jpeg";
import Image from "next/image";;

export default function Portfolio() {
    return (
        <main>
            <h1 className="page-title"> Portfolio </h1>
            <div className="project"> 
                <a href="index.html"> <Image src={portrait} width="1800" alt="Portrait image of Elaina Lyons" /> </a>
                <div className="project-details">
                    <p className="project-name"> <strong> Elaina Lyons' Personal Website</strong> </p>
                    <p className="project-description"> This project involved the use of HTML and CSS to independently create an
                        interactive website. With a home page and information on Elaina Lyons' blog, resume, and portfolio, this website
                        also contains a form prompting viewers to submit their contact information. </p>
                    <a href="index.html"> LEARN MORE </a>
                </div>
            </div>
        </main>
    )
}