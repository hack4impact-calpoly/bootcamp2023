import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import projectSchema from "@/database/projectSchema"
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
	const projectSlug=body["slug"]
	// validate body
	if (body == null) {
		throw new Error("it is empty")
	}
	await connectDB()
	try {
		const blog = await fetch(process.env.URL + `/api/portfolio/${projectSlug}`)
		var result=projectSchema.collection.updateOne({
			"slug":projectSlug
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
