export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
  image: string;
}

const blogs: Blog[] = [
  {
    title: "Cool Beans",
    date: "10/24/23",
    description: "This is the cool beans blog.",
    slug: "coolbeans.html",
    image: "/beans.webp",
  },
  {
    title: "UnCool Rice",
    date: "10/24/23",
    description: "This is the uncool rice blog.",
    slug: "uncoolrice.html",
    image: "/rice.jpeg",
  },
];

export default blogs;
