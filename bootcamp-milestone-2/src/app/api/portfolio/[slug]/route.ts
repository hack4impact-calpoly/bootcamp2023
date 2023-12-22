import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../database/db";
import projectSchema from "../../../database/blogSchema";

type Params = {
    params: {
      slug: string;
    };
  };

export async function GET(req: NextRequest, { params }: Params) {
    await connectDB();
    const { slug } = params; 

    try {
        const blog = await projectSchema.findOne({ slug:slug }).orFail();
        return NextResponse.json(blog);
    } catch (err) {
        return NextResponse.json("Projects not found.", { status: 404 });
    }
}

