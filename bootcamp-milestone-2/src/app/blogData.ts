export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
  image: string;
}

const blogs: Blog[] = [
  {
    title: "My first blog",
    date: "10/18/2023",
    description: "This is my very first blog post!",
    slug: "/blog/first",
    image: "/one.png"
  },
  {
    title: "My second blog",
    date: "10/18/2023",
    description: "This is my second blog post!",
    slug: "/blog/second",
    image: "/two.png"
  }
]

export default blogs;