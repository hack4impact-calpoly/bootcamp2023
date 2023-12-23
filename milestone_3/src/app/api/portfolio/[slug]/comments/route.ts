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
        if (!body) {
            return "invalid body"
        }
        try {
            const blog = await Project.findOneAndUpdate(
                {slug: slug},
                {$push: {comments: {user: user, comment: comment, time: new Date()}}},
                {new: true}

            ).orFail();
            return NextResponse.json(blog);

        } catch (err) {
            return NextResponse.json("Blog not found.", { status: 404 });
        }

    }