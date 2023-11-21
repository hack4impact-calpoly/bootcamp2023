import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Projects from "@/database/projectSchema";
import Comments, { IComment } from "@/database/commentSchema";

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
        //get project, and populate comments from their reference ids
        const project = await Projects.findOne({ _id: id })
            .populate("comments")
            .orFail();
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
        const { user, comment, date }: IComment = await req.json();
        const newComment = new Comments({
            user: user,
            comment: comment,
            date: date,
        });
        await newComment.save();

        //add new comment to project
        project.comments.push(newComment._id);
        await project.save();

        return NextResponse.json("Comment added successfully", { status: 200 });
    } catch (err) {
        return NextResponse.json("Comment not added.", { status: 400 });
    }
}
