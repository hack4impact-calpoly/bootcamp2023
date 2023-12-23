import { NextRequest, NextResponse } from 'next/server'
import { IComment } from '@/database/blogSchema'
import Blog from '@/database/blogSchema';
import connectDB from "@/helpers/db"


type IParams = { params: { slug: string} }

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB()
	const body: IComment = await req.json();
	const { slug } = params;
	// validate body
    const { user, comment } = body;
	if (!user || !comment) {            // there will always be a date
		return NextResponse.json('Fill out all comment fields.', { status: 400 }) // status 400 means client error
	}
	else {
        // push comment object to document and update document, make sure
        // to return the updated document so we can see the comment posted
        try {
            const newBlog = await Blog.findOneAndUpdate({ slug }, { $push: {comments: body}}).orFail();
            console.log(body)

            console.log(newBlog)

            return NextResponse.json(newBlog, { status: 200})    
        }
        catch(err) {
            return NextResponse.json('Blog not found.', { status: 404 })
        }
    }
	
}