import { ReactNode } from "react";

export interface Portfolio {
  [x: string]: ReactNode;
}
const portfolios: Portfolio[] = [
  {
    projectName: "Personal Website 2023",
    slug: "portfolio1",
    projectDescription:
      "After completing the Hack4Impact Starter Pack, I learned the skills of HTML, CSS, and JavaScript to create an updated website with all working links.",
    image: "/screenshot.jpg",
    learnMore: "EXPLORE"
  }
];

export default portfolios;
