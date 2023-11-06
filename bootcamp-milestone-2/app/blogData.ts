export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Blog Post 1",
    date: "10-17-2023",
    description: "This is the first blog post.",
    slug: "blog-post-1",
  },
  {
    title: "Blog Post 2",
    date: "10-21-2023",
    description: "This is the second blog post.",
    slug: "blog-post-2",
  },
];

export default blogs;
