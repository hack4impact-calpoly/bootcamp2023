import connectDB from "../../../../database/db";
import { NextRequest, NextResponse } from "next/server";
import Blog from "../../../../database/blogSchema";
import { IComment } from "../../../../database/blogSchema";

type IParams = {
    params: {
        slug: string;
    };
};

export async function POST(req: NextRequest, {params}: IParams) {
    await connectDB();
    const { slug } = params; 
	const body = await req.json();
	const user = body.user;
	const comment = body.comment;

	// validate body
	await connectDB();
	// validate body
	if (!body) {
		return "invalid ):"
	}
    try {
        const blog = await Blog.findOneAndUpdate(
            {slug: slug},
            {$push: {comments: {user: user, comment: comment}}},
            {new: true}

        ).orFail();
        return NextResponse.json(blog);

    } catch (err) {
        return NextResponse.json("Blog not found.", { status: 404 });
    }
}