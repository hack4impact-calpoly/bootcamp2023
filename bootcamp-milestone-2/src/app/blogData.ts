export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "My Internship @ Wells Fargo Technology",
    date: "9/30/2023",
    description:
      "I spent this past summer developing internal tools for Wells Fargo Technology using the full stack!",
    slug: "blog1.html",
  },
  {
    title: "Attending Grace Hopper Celebration 2023!",
    date: "10/17/2023",
    description:
      "I got to attend an amazing gathering of women and non-binary folk in technology!",
    slug: "blog2.html",
  },
];

export default blogs;
