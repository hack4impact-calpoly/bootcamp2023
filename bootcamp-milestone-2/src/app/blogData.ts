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
    slug: "cinque-terre.html",
  },
  {
    title: "Tuscany",
    date: "10/21/2023",
    description: "The program-organized event, covering Flourence and Pisa",
    slug: "tuscany.html",
  },
];

export default blogList;