export interface Blog {
  date: string;
  title: string;
  description: string;
  slug: string;
  image: string;
}

const blogs: Blog[] = [
  {
    date: "10/22/23",
    title: "First Post!",
    description: "Welcome to my first Blog post!",
    slug: "firstBlogPost",
    image: "/breadrollsSquare.png",
  },
  {
    date: "10/22/23",
    title: "veggie dish???",
    description: "This is my second Blog post!",
    slug: "secondBlogPost",
    image: "/vegetableDishSquare.png",
  },
];

export default blogs;
