import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/helpers/db";
import ProjectModel from "@/app/database/projectSchema";
import Comments, { IComment } from "@/app/database/commentSchema";

type IParams = {
    params: {
        id: string;
    };
};
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB(); // function from db.ts before
    const { id } = params; // another destructure

    try {
        //get project, and populate comments from their reference ids
        const project = await ProjectModel.findOne({ _id: id })
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
        const project = await ProjectModel.findById(id).orFail();

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
        await project.populate("comments");

        return NextResponse.json(project, { status: 200 });
    } catch (err) {
        return NextResponse.json("Comment not added.", { status: 400 });
    }
}