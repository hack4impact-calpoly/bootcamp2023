// import Portfolio, {portfolioSchema, projectSchema, commentSchema} from "@/database/portfolioSchema";
import connectDB from "@/helpers/db";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Project from "@/database/projectSchema";


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

    //! Date
    const currentDateUTC = new Date();
    // Convert UTC time to a specific timezone (e.g., UTC+2:00, replace '2' with your timezone offset)
    const timezoneOffset = -8; // Replace with your desired offset
    const offsetInMilliseconds = timezoneOffset * 60 * 60 * 1000; // Convert hours to milliseconds
    const error = 600000;
    const currentLocalTime = new Date(currentDateUTC.getTime() + offsetInMilliseconds + error); // Get millseconds and do calculations to do some time adjustments and then make that back into a date 
    // console.log(currentLocalTime)
    const date = currentLocalTime
    const photo = "/images/profile.jpeg"   //! This is here as a defaullt profile picture

    //! Connect to DB
    await connectDB();
    const db = mongoose.connection // get that connection in a variable
    
    const {slug} = params; // get the slug

    // update the array of comments of the blog to include one more comment
   try {
     const updatedComments = await Project.findOneAndUpdate(
         {slug : slug}, // Find the blog by slug
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
     return NextResponse.json({message: "Comment Created"}, {status: 201});
   } catch (error) {
   }
}
