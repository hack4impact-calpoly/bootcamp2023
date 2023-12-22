type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "Japan and Korea",
    date: "10-23-2023",
    description: "Trip to Japan and Korea!",
    slug: "JK23",
  },
  {
    title: "Thailand and Singapore",
    date: "10-23-2022",
    description: "Going to Thailand and Singapore for the first time!",
    slug: "TS22",
  },
];

export default blogs;
