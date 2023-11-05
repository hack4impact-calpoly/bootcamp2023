export interface Blog {
  title : string;
  date: string;
  description: string;
  image: string;
  slug: string;
}

const blogPosts: Blog[] = [
  {
    title : "Gardening",
    date: "10-19-2023",
    description: "Outside of coding I love to spend some time gardening and growing food for my family",
    image: "/dragon6.JPG",
    slug: "gardening-post"
  }, 
  {
    title: "Hiking",
    date: "7-12-2023",
    description: "Something else outside of the realm of technology is hiking, and enjoying nature.",
    image: "/volcanoImage.png",
    slug: "hiking-post"
  }
];

export default blogPosts;