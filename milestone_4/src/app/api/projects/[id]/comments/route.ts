import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helper/db"
import Projects from "@/database/projectSchema";


type IParams = {
		params: {
			id: string
		}
}

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.

	If we didn't do this, to obtain slug would look messy,
	ex.
	const slug = params.params.slug

	There are more ways to destructure this, but that is up to you to find out
	lol.

*/

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB(); // function from db.ts before
	const { id } = params; // another destructure
    const body = await req.json();
    console.log("IN POST API FOR PROJECT");
    
	try {
        console
        const new_comment = {user: body.user, comment: body.comment, date: new Date(body.date)};
		const project = await Projects.findOne({slug: `./projects/${id}` }).orFail();
        project.comments.push(new_comment);
        project.save();
		return NextResponse.json("Updated Project", {status: 200});
	} catch (err) {
		console.log("IN GET ERROR");
		return NextResponse.json('Project not found.', { status: 404 });
	}
}
