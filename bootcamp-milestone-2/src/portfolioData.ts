export interface Portfolio {
  date: string;
  description: string;
  slug: string;
  image: string;
  projectName: string;
}

const portfolios: Portfolio[] = [
  {
    date: "Fall Quarter, 2023",
    description:
      "I completed this project as part of the application for Cal Poly's Hack4Impact club. I followed the starter pack tutorial that was created by the Hack4Impact team to help introduce people to web development.",
    slug: "../home",
    image: "/portfolio_site_image.png",
    projectName: "Hack4Impact Starter Pack, Website Project",
  },
];

export default portfolios;
