import connectDB from "@/helpers/db"; // Connection to MongoDB
import blogSchema from "@/database/blogSchema"; // Get the Schema
import { NextRequest, NextResponse } from 'next/server'; //So we can do the http methods

// for type script
type Params = { 
	params : {
		slug: string,
	}
}

// Destructuring is like key and you associate that value with the key

const identity = {
	name : "Taran",
	dob : "April 23",
	age : "57",
}

// descturving the input [slug] as {params} gives us what is inside the label params as the variable params
// inside params, based on the typing, we know its going to be a slug
// so we can then use the key of a slug to get what is inside that label
	// {slug} = params (meaning from the label params, get me whatever the key slugs gives, there can be other key entries or not, but we dont care)


const {name, dob, age} = identity 


export async function GET(request : NextRequest, {params} : Params) {
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


export async function PUT(request : NextRequest, {params} : Params) {
    const {slug} = params;
    const {Blog} = await request.json();
    await connectDB();
    await Blog.findByIdAndUpdate(slug, {Blog})
    return NextResponse.json({ message: "Blog Updated"}, {status: 200});    
}