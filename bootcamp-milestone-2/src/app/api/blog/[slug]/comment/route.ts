import { NextRequest, NextResponse } from "next/server";
import Blog from "@/database/blogSchema";
import { IComment } from "@/app/typings/comment";

type IParams = {
  params: {
    slug: string;
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
	const newComment: IComment = await req.json();
	const { user, comment, time } = newComment;
	if (!user || !comment || !time) {
		return NextResponse.json("Invalid comment", { status: 400 });
	}

	const { slug } = params;
	try {
		const updatedDocument = await Blog.findOneAndUpdate({ slug }, 
            { $push: { comments: newComment }}, 
            { new: true }).orFail();

		return NextResponse.json(updatedDocument, { status: 200 })

	} catch (err) {	
		console.log(err);
		return NextResponse.json("An error occured", { status: 500 });
	}
}

