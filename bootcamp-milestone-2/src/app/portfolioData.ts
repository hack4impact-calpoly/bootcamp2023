export interface PortfolioEntry {
  name: string;
  text: string;
  image: string;
  slug: string;
}

const portfolios: PortfolioEntry[] = [
  {
    name: "Kelly Becker's Personal Website",
    text: "This is a website I made with Hack4Impact to show my contact info, resume, projects and more!",
    image: "/website_screenshot.png",
    slug: "/",
  },
  {
    name: "Blockchain Research Project",
    text: "I created blockchain system designs for smart manufacturing safety systems!",
    image: "/dogphoto.jpeg",
    slug: "/",
  },
];

export default portfolios;
