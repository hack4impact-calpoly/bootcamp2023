type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export interface Project {
    title: string,
    date: string,
    description: string,
    slug: string,
    image: string,
}

const projectList: Project[] = [
  {
    title: "Personal Website",
    date: "2023-10-03",
    description: "This is my personal website where you'll find a brief introduction about myself, my portfolio, resume, and contact information!",
    slug: "/",
    image: "/../../public/personal website.png",
  },
  {
    title: "Drip by Drop",
    date: "2023-11-25",
    description: "An app I made to find public drinking fountains near your current location and navigate towards them. Although it was initially intended for the Nasoni found throughout Rome, it's rapidly expanded to fountains around the world! Hoping to get it on the Google Play Store soon",
    slug: "https://www.linkedin.com/company/drop-co-op/",
    image: "/../../public/Drip-Map.jpg",
  },
];

export default projectList;