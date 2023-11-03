export type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Hello, World!",
    date: "2021-01-01",
    description: "My first blog post.",
    slug: "hello-world",
  },
  {
    title: "Hello, World, Again!",
    date: "2021-01-02",
    description: "My second blog post.",
    slug: "hello-world-again",
  },
];
