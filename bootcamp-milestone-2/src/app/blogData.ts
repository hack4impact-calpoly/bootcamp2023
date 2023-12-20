import { StaticImageData } from "next/image";
//import bagelspic from "@/app/images/bagels.jpeg"
//import uniqueinterviewpic from "@/app/images/uniqueinterviewskills.webp"
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

const blogs: Blog[] = []; // Initialize as an empty array

export interface Blog {
    title : string;
    date: string;
    description: string;
	image: StaticImageData;
    slug: string;
};

//const blogs: Blog[] = [
// 	{
// 		title: "Unique interview skills",
// 		date: "10-22-2023",
// 		description: "Skills that would be really cool to show off in a a job interview.",
// 		image: uniqueinterviewpic,
//         slug: "blog2.html",
// 	},
// 	{
// 		title: "Bagels",
// 		date: "10-21-2023",
// 		description: "Ranking bagel shops best to worst.",
// 		image: bagelspic,
//         slug: "blog1.html",
// 	},

//getBlogs()
 //];

 async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message

	    return blogs
	} catch (err) {
	    return null
	}
}

async function initializeBlogs() {
	const fetchedBlogs = await getBlogs();
  
	if (fetchedBlogs) {
	  // Populate the blogs array if fetching is successful
	  blogs.push(...fetchedBlogs);
	}
}
  
console.log(blogs)

// Call the initialization function
initializeBlogs();


export default blogs;

