import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import blogSchema from "@/database/blogSchema"
import { time } from 'console'
type IParams = {
    params: {
        slug: string
		user: string
		comment:string
		time: string
    }
}
export async function POST(req: NextRequest) {

	const body = await req.json()
	console.log(body)

	const BlogSlug=body["slug"]
	// validate body
	if (body == null) {
		throw new Error("it is empty")
	}
	await connectDB()
	try {
		const blog = await fetch(`http://localhost:3000/api/blog/${BlogSlug}`)
		var result=blogSchema.collection.updateOne({
			"slug":BlogSlug
		},{
			$addToSet: {
                comments: {
                    user: body["user"],
					comment: body["comment"],
					time: body["time"]
                }
            }
		})
		return NextResponse.json(result)
	} catch(e) {
		return NextResponse.json('Error', { status: 404 })
	}
}