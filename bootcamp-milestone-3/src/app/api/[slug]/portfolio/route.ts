import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import portfolioSchema from '@/database/projectSchema'

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
	await connectDB() 	
	const { slug } = params
		console.log("Searching for portfolio atm");
	   try {
	        const blog = await portfolioSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Portfolio not found.', { status: 404 })
	    }
}

export async function POST(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = params;


	try {
		const blog = await portfolioSchema.findOne({ slug }).orFail(); // get the particular portfolio
		const body = await req.json();

		blog.comments.push(body);

		blog.save();

		return NextResponse.json("Comment added");
	}
	catch (err) {
		return NextResponse.json('Unable to add comment', { status: 404 });
	}


}
