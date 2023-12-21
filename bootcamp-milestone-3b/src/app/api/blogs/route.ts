// I am going to use the api for CRUD operations
// The general blog operations include post, get, and delete (create, read, delete)
// We are not going to use the update method. We will have an indvidual [slug] based get method that will allow us to just get the data for a singular blog (this will be used in the singular blog pages)

import connectDB from "@/helpers/db"; // Connection to MongoDB
import Blog from "@/database/blogSchema"; // Get the Schema
import { NextRequest, NextResponse } from "next/server"; //So we can do the http methods

export async function GET() {
    await connectDB(); // connect to Mongo
    try {
        const blogs = await Blog.find().sort({ date: -1 }).orFail() // This sorts the blogs newest to oldest
        return NextResponse.json({blogs});
    } catch(error){
        console.log(error)
        return null
    }    
}

export async function POST(request : NextRequest) {
    const {...blog} = await request.json();
    await connectDB();
    await Blog.create({...blog});
    return NextResponse.json({message: "Blog Created"}, {status: 201});
}