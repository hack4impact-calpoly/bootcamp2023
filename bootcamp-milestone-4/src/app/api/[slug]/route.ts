import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import blogSchema from '@/database/blogSchema'

type IParams = {
	params: {
		slug: string
	}
}

type IComment = {
	user: string;
	comment: string;
	time: Date;
};

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
	const { slug } = params // another destructure

	try {
		const blog = await blogSchema.findOne({ slug }).orFail()
		return NextResponse.json(blog)
	} catch (err) {
		return NextResponse.json('Blog not found.', { status: 404 })
	}
}

export async function POST(req: NextRequest, { params }: IParams) {
	// Connect to the database
	await connectDB();
	const { slug } = params;
  
	try {
		// Find the blog with the specified slug
		const blog = await blogSchema.findOne({ slug }).orFail();
		
		const { user, comment, time }: IComment = await req.json();
		const newComment = { user, comment, time };

		try {
			await blogSchema.updateOne(
				{ slug },
				{ $push: {comments: newComment}});
		} catch (err) {
			console.log(err);
			return NextResponse.json("Could not add comment", { status: 400 });
		}
  

		await blog.save();
  
  
	  	return NextResponse.json("comment added successfully", { status: 200});
	} catch (error: unknown) {
	  if (error instanceof Error) {
		  return error.message
	  }
	  return String(error)
  }
  }
  
