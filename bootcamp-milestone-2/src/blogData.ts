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
    text: "This is an introductory blog post with plenty of styling to come! For now, here's what I can tell you. The origin of this photo is from two weeks ago, where my roommates and I headed to Pirates Cove for the first time.",
  },

  {
    name: "Hello there",
    description: "A slight introduction",
    image: "/sky.jpg",
    posted: "10-19-2023",
    text: "A friend of mine calls the sunsets in San Luis Obispo slosets, which I've recently adopted into my own vocabulary. Enjoy this photo of the sunset highlighting the cascading clouds near Pismo.",
  },

  {
    name: "Hello there",
    description: "A slight introduction",
    image: "/mountain.jpg",
    posted: "10-20-2023",
    text: "This summer, I visited Seattle with friends and took over 200 photos on my phone. I was an insufferable tourist, dragging Seattle locals to go to Pike Place Market, the Space Needle, and Gasworks Park.",
  },
];

export default blogs;
