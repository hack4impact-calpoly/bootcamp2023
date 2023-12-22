import Blog, { IComment } from "@/database/blogSchema";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, { params }: { params: { slug: string }}) {
	const newComment: IComment = await req.json();
	const { user, comment, time } = newComment;
	if (!user || !comment || !time) {
		return NextResponse.json("Invalid comment", { status: 400 });
	}

	const { slug } = params;
	try {
		const updatedDocument = await Blog.findOneAndUpdate({ slug }, { $push: { comments: newComment }}, { new: true }).orFail();
		return NextResponse.json(updatedDocument, { status: 200 })
	} catch (err) {	
		console.log(err);
		return NextResponse.json("An error occured", { status: 500 });
	}
}