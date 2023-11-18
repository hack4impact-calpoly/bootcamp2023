import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import portfolioSchema from "@/database/portfolioSchema";

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const blog = await portfolioSchema.findOne({ slug }).orFail()
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}
