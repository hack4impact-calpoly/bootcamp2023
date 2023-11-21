import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Projects, { IComment } from "@/database/projectSchema";

type IParams = {
    params: {
        id: string;
    };
};

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
    const { id } = params; // another destructure

    try {
        const project = await Projects.findOne({ _id: id }).orFail();
        return NextResponse.json(project, { status: 200 });
    } catch (err) {
        return NextResponse.json("Project not found.", { status: 404 });
    }
}

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { id } = params;

    try {
        //get project with specified id
        const project = await Projects.findById(id).orFail();

        //parse request body
        const { user, comment, time }: IComment = await req.json();

        //add new comment to project
        project.comments.push({
            user: user,
            comment: comment,
            time: time,
        });
        await project.save();

        return NextResponse.json("Comment added successfully", { status: 200 });
    } catch (err) {
        return NextResponse.json("Comment not added.", { status: 400 });
    }
}
