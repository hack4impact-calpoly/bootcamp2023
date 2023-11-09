export interface Blog {
  title: string
	date: string
  description: string
  image: string
	slug: string
}

const blogs: Blog[] = [
	{
    title: "Sample Blog 1",
    date: "2023-10-23",
    description: "This is the first sample blog description.",
    image: "/bea.jpg",
    slug: "/blogs/sample-blog-",
  },
  {
    title: "Sample Blog 2",
    date: "2023-10-24",
    description: "This is the second sample blog description.",
    image: "bea.jpg",
    slug: "/blogs/sample-blog-2.html",
  },
];

export default blogs;