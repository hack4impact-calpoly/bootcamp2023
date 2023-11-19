
export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
}

export const blogs: Blog[] = [
  {
    title: "Blog 1",
    date: "10-20-2023",
    description: "Hi this is my first blog post!",
    image: "/sunset.jpg",
    slug: "blog1",
  },
  {
    title: "Becoming a Blogger",
    date: "10-21-2023",
    description: "I am becoming quite fluent in blogging",
    image: "/stars.jpg",
    slug: "blog2",
  },
];
//export default blogs;
