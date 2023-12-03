type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export interface Blog {
  title: string;
  date: string;
  description: string;
  slug: string;
  content: string[]; // for individual blog page
  comments: IComment[]; // array for comments
};

const blogList: Blog[] = [
  {
    title: "Cinque Terre",
    date: "2023-10-21",
    description: "My first weekend trip exploring another part of Italy!",
    slug: "/blog/cinque_terre",
    content: [],
    comments: [],
  },
  {
    title: "Tuscany",
    date: "2023-10-21",
    description: "The program-organized event, covering Flourence and Pisa",
    slug: "/blog/tuscany",
    content: [],
    comments: [],
  },
];

export default blogList;