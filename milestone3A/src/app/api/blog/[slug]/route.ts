import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import Blogs from '@/database/blogSchema'

type IParams = { params: { slug: string} }

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.

	If we didn't do this, to obtain slug would look messy,
	ex.
	const slug = params.params.slug

 */
export async function GET(req: NextRequest, { params }: IParams) {
	console.log("runs GET");
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const blog = await Blogs.findOne({ slug: slug }).orFail()	
			// property slug which is assigned slug var from earlier, not a destructure
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}
