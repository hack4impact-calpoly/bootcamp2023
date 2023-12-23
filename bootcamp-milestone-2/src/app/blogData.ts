import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";


export interface Blog {
	title: string;
	date: string;
	description: string;
    slug: string
};

const blogs: Blog[] = [
	{

		title: "My Internship @ Microchip Technology!",
		date: "9/15/2023",
		description: "I spent this past summer (2023) interning at Microchip Technology Inc. where I was able to apply the skills I learned in school to contribute to meaningful work.",
        slug: "Blog1.html",
	},
	{
		title: "Starting as a Software Dev @ Hack4Impact",
		date: "10/29/2023",
		description: "I began my position as a software developer at Hack4Impact, a 501c3 non-profit organization that develops software projects for local non-profits in San Luis Obispo County!",
        slug: "Blog2.html"
	},
];


// export async function getBlogs(){
// 	await connectDB() // function from db.ts before

// 	try {
// 			// query for all blogs and sort by date
// 	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
// 			// send a response as the blogs as the message

// 	    return blogs as Blog[];
// 	} catch (err) {
// 	    return null
// 	}
// }


// try {
// 	const blogs = await getBlogs();

// 	if (blogs !== null) {
// 	  // Blogs were fetched successfully
// 	  // Update your state or perform actions with the fetched blogs
// 	  console.log('Fetched blogs:', blogs);
// 	  // Example: Set the blogs in state (if using React useState)
// 	  // setBlogs(blogs);
// 	} else {
// 	  // Handle the case when no blogs are found (blogs === null)
// 	  console.log('No blogs found.');
// 	}
//   } catch (error) {
// 	// Handle errors that occurred during fetching blogs
// 	console.error('Error fetching blogs:', error);
//   }

export default blogs;