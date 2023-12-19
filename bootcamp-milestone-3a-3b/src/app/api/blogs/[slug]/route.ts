import connectDB from "@/helpers/db"; // Connection to MongoDB
import blogSchema from "@/database/blogSchema"; // Get the Schema
import { NextRequest, NextResponse } from 'next/server'; //So we can do the http methods

// for type script
type IParams = { 
	params : {
		slug: string 
	}
}

export async function PUT(request : NextRequest, {params} : IParams) {
    const {slug} = params;
    const {Blog} = await request.json();
    await connectDB();
    await Blog.findByIdAndUpdate(slug, {Blog})
    return NextResponse.json({ message: "Blog Updated"}, {status: 200});    
}

export async function GET(request : NextRequest, {params} : IParams) {
	const {slug} = params;
	await connectDB();

	try { // If we don't get a blog, error out
							// Using the scheme as template, find a blog with this unique attirubte, else fail
		const blog = await blogSchema.findOne({ slug : slug }).orFail() // Try getting a blog, or throw error
		return NextResponse.json({blog}, {status: 200}) // return the blog we got
	} catch (error) {
		console.log(error)
		return NextResponse.json({message: "Blog Not Found"}, { status: 404 })
	}	
}
