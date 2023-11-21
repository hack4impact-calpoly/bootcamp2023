import { ReactNode } from "react";

export interface Blog {
  [x: string]: ReactNode;
}
const blogs: Blog[] = [
  {
    name: "Hello there",
    description: "A slight introduction",
    image: "/beach.jpg",
    posted: "10-18-2023",
    text: "This is an introductory blog post with plenty of styling to come!",
  },

  {
    name: "Hello there",
    description: "A slight introduction",
    image: "/sky.jpg",
    posted: "10-18-2023",
    text: "This is an introductory blog post with plenty of styling to come!",
  },

  {
    name: "Hello there",
    description: "A slight introduction",
    image: "/mountain.jpg",
    posted: "10-18-2023",
    text: "This is an introductory blog post with plenty of styling to come!",
  },
];

export default blogs;
