import  Blog  from "../database/blogSchema";
import connectDB from "./db";

/* helps add the blog objects */

let blogs: Object = [
  {
    title: "Cool Beans",
    slug: "coolbeans.html",
    date: new Date(),
    description: "This is the cool beans blog.",
    content: "This is the cool beans blog content",
    image: "/beans.webp",
    comments: {
      user: "testUser",
      comment: "test comment 1",
      time: new Date(),
    },
  },
  {
    title: "Uncool Rice",
    slug: "uncoolrice.html",
    date: new Date(),
    description: "This is the uncool rice blog.",
    content: "This is the uncool rice blog content",
    image: "/rice.peg",
    comments: {
      user: "testUser2",
      comment: "test comment for rice",
      time: new Date(),
    },
  },
];

const foo = async () => {
  let conn = await connectDB();
  await Blog.insertMany(blogs);
};

foo();
