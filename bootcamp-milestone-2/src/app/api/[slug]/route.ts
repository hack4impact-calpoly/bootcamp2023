import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import blogSchema from '@/database/blogSchema'
import Blog from '@/database/blogSchema'
import blogs from '@/blogData'
import { ObjectId } from 'mongodb'


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
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}

export async function POST(req: NextRequest) {
	const body = req.body
	const BlogSlug = req.url
	// validate body
	if (!body) {
		return NextResponse.json('Comment does not exist.', {status: 404})
	}
	
	Blog.updateOne(
		{
			_id: new ObjectId('655fcb47d5fc316161185eb8')
		}, {
			$push: { "comments": {
				"0": "user527",
				"1": "What a wonderful time!",
				"2": "time"
			}

			}
		}
	)
}