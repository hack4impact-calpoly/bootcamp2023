
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import Projects from '@/database/projectSchema';


type IParams = {
		params: {
			slug: string
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
	export async function GET(req: NextRequest, { params }: IParams) {
		await connectDB(); // function from db.ts before
		const { slug } = params; // another destructure
	
		try {
			const project = await Projects.findOne({ slug: slug }).orFail();

			return NextResponse.json(project, { status: 200 });
		} catch (err) {
			return NextResponse.json("Project not found.", { status: 404 });
		}
	}



	export async function POST(req: Request, { params }: IParams) {
		const body = await req.json()
	  
		const { user, comment } = body;
	
	  
		const { slug } = params;
	  
		
		await connectDB()
		try {
		  // Validate body
		  if (await isValid(body)) {
	
			const project = await Projects.findOne({ slug: slug }).orFail();
			if (project !== null) {

				project.comments.push({
					user: user,
					comment: comment,
					time: new Date(),
				});
	  
			  await project.save();
			  return Response.json({ message: "Comment posted successfully!" }, { status: 200 });
			} else {
			  return Response.json({ error: "Blog not found" }, { status: 404 });
			}
		  } else {
			return Response.json({ error: "Invalid comment data" }, { status: 400 } );
		  }
		} catch (error) {
		  console.error("Error:", error);
		  throw new Error("Internal server error"); // Customize this error message as needed
		}
	  }
	  
	
	
	async function isValid(body: any) {
		// the issue right now is that the body that comes back seems to be with undefined params, like undefined comment, etc
		if (!body || typeof body.comment !== 'string' || body.comment.trim() === '' || typeof body.user !== 'string') {
			return false
		}
		return true
	}