import Blog, {blogSchema, commentSchema} from "@/database/blogSchema";
import connectDB from "@/helpers/db";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

// export async function GET(request : NextRequest, {params} : Params) {
// 	const {slug} = params;
// 	await connectDB();

// 	try { // If we don't get a blog, error out
// 							// Using the scheme as template, find a blog with this unique attirubte, else fail
// 		const blog = await commentSchema.findOne({ slug : slug }).orFail() // Try getting a blog, or throw error
// 		return NextResponse.json({blog}, {status: 200}) // return the blog we got
// 	} catch (error) {
// 		console.log(error)
// 		return NextResponse.json({message: "Blog Not Found"}, { status: 404 })
// 	}	
// }

// try {
//     const res = await fetch("http://localhost:3000/api/nuggets" , {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify({title, description}),
//     });
//     console.log("posted")

//     // Make the user go to the home page
//     if (res.ok) {
//         // router.reload()
//         router.push("/"); 
//         router.refresh();
//         // console.log("Ok")
//     } else {
//         throw new Error("Failed to add wisdom.")
//     }
// } catch (error) {
//     console.log(error);
//     console.log("Not Ok")
// }


type Params = { 
    params : {
        slug : string,
    }
}



// Request has our comment data
export async function POST(request : NextRequest, {params} : Params) {
    // make the data for a comment
    const {user, comment} = await request.json();
    // Error handling if no user or comments given
    if (!user || !comment) {
        return NextResponse.json({message: "Insufficient Data"}, {status: 400});
    }

    const currentDateUTC = new Date();

    // Convert UTC time to a specific timezone (e.g., UTC+2:00, replace '2' with your timezone offset)
    const timezoneOffset = -8; // Replace with your desired offset
    const offsetInMilliseconds = timezoneOffset * 60 * 60 * 1000; // Convert hours to milliseconds
    const error = 600000;
    const currentLocalTime = new Date(currentDateUTC.getTime() + offsetInMilliseconds + error); // Get millseconds and do calculations to do some time adjustments and then make that back into a date 
    console.log(currentLocalTime)
    const date = currentLocalTime
    const photo = "/images/profile.jpeg"   //! This is here as a defaullt profile picture


    // push the comment to the database 
    const {slug} = params; // get the slug
    console.log(slug) 

    await connectDB();
    const db = mongoose.connection // get that connection in a variable
    
    // update the array of comments of the blog to include one more comment
    const updatedBlog = await Blog.findOneAndUpdate(
        { slug: slug }, // Find the blog by slug
        {
            $push: {
                comments: {
                    user: user,
                    comment: comment,
                    photo: photo,
                    date: date,
                }
            }
        },
        { new: true } // To return the updated document
    );

    console.log(updatedBlog)
   
   
   
    // db.collection.update(
    //     { slug : slug }, // Upadate this blog      // find the blog we want to get 
    //     { $push: {"comments": {     // edit the schema 
    //         user: user,
    //         comment: comment,
    //         photo: photo,
    //         date: date,
    //     }}}
    // )



    return NextResponse.json({message: "Comment Created"}, {status: 201});

}

// 
// Error handling 
// Get blog
// Append to end of list
// const {slug} = params;

// Blog
// Update the comment section of the blog by just adding the post
    // await commentSchema.create({user, comment, image, date});
