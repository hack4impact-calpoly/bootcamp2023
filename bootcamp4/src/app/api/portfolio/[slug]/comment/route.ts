import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams ) {
	const body = await req.json()
	const { slug } = params;
  const user = body.user;
  const comment = body.comment;
  await connectDB();
	// validate body
	if (!body) {
		return NextResponse.json("Invalid comment", { status: 404 });
	}
    try {
        const project = await Project.findOneAndUpdate(
            {slug: slug},
            {$push: {comments: {user: user, comment: comment}}},
            {new: true}
           
        ).orFail();
        return NextResponse.json(project);
    
    } catch (err) {
        return NextResponse.json("Blog not found.", { status: 404 });
    }
	
}
