interface Project {
  name: string;
  description: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Personal Website",
    description: "Made for the Hack4Impact Cal Poly starter pack!",
    link: "index.html",
    image: "project-1.png",
  },
  {
    name: "CourseConnect",
    description:
      "CourseConnect is a social networking platform I built for high school students.",
    link: "https://www.courseconnect.net",
    image: "project-2.png",
  },
  {
    name: "Memora",
    description:
      "Memora is a crossplatform mobile application which allows users to create interactive experiences with NFC.",
    link: "#",
    image: "project-3.png",
  },
  {
    name: "MyTar",
    description: "USTAR compliant archive creator, extractor, and lister.",
    link: "https://github.com/devinhadley/mytar",
    image: "project-3.png",
  },
  {
    name: "SimpleWebAutomator",
    description:
      "Build web automation scripts with a simple English-like syntax.",
    link: "https://github.com/devinhadley/SimpleWebAutomator",
    image: "project-5.png",
  },
  {
    name: "Covid Tracker",
    description:
      "A crossplatform mobile application that tracked U.S. COVID cases on a state and nationwide basis.",
    link: "https://github.com/devinhadley/covidtracker",
    image: "project-6.png",
  },
];

export default projects;
