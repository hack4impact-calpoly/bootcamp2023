import portrait from "../../../public/portrait.jpeg";
import Image from "next/image";;

export default function Home() {
  return (    
      <div>
          <h1 className="page-title"> Home </h1>
          <div className="about">
            <div className="about-image">
                <Image src={portrait} width="1800" alt="Portrait image of Elaina Lyons" /> 
            </div>
            <div className="about-text"> 
            <p> Hello! My name is <strong> Elaina Lyons </strong> and I am a first-year <em> computer science </em> student at Cal Poly.
            I love to be outside, whether that be running, mountain biking, paddle boarding, hiking, or skiing near my home in <em> Denver, Colorado.</em>
            Other hobbies of mine include playing the <strong> piano </strong> (which I've been doing for 13 years), <strong>reading</strong> 
            (currently the Mistborn series by Brandon Sanderson) and hanging out with <strong> friends!</strong></p>
            <p> I love to <em> code </em>and would love to work with <em> Hack4Impact </em>on their exciting projects!</p>
            </div>
          </div>
      </div>
  )
}
