// WE just need to get project data
import connectDB from "@/helpers/db"; // Connection to MongoDB
import Project from "@/database/projectSchema"; // Get the Schema
import { NextResponse } from "next/server"; //So we can do the http methods
// import Portfolio from "@/database/portfolioSchema";

export async function GET() {
    await connectDB(); // connect to Mongo
    try {
        const projects = await Project.find().orFail() // Find the data related to schema
        return NextResponse.json({projects});
    } catch(error){
        console.log(error)
        return null
    }    
}
