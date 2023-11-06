export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogList: Blog[] = [
  {
    title: "Cinque Terre",
    date: "10/21/2023",
    description: "My first weekend trip exploring another part of Italy!",
    slug: "/blog/cinque_terre",
  },
  {
    title: "Tuscany",
    date: "10/21/2023",
    description: "The program-organized event, covering Flourence and Pisa",
    slug: "/blog/tuscany",
  },
];

export default blogList;