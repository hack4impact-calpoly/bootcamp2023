export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "The Intersection of Arts and Computing",
    date: "October 23, 2023",
    description: "A brief article on virtual, augmented, and mixed reality.",
    slug: "/blog/blog_pages/blog1",
  },
  {
    title: "What My Dance Journey Has Taught Me",
    date: "October 23, 2023",
    description: "Summarizing my dance journey and what lessons I've learned.",
    slug: "/blog/blog_pages/blog2",
  },
];

export default blogs; // this allows us to access the data anywhere
