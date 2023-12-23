import blogSchema from "../../../models/blogSchema.ts"
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const blog = await blogSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('No Blogs', { status: 404 })
	    }
}

export async function POST(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = params;


	try {
		const blog = await blogSchema.findOne({ slug }).orFail(); // get the particular blog
		const body = await req.json();
		blog.comments.push(body);

		blog.save();

		return NextResponse.json("comment added");
	}
	catch (err) {
		return NextResponse.json('could not add comment', { status: 404 });
	}
}
