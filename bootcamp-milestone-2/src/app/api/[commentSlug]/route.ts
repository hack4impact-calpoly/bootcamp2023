import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../helpers/db";
import blogSchema from "../../../database/blogSchema";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function PUT(req: NextRequest, params: Params) {
  await connectDB();
  const slug = params.params.commentSlug;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    const newComment = req.body;  
    /* const { comment } = await req.json(); */

    blog.comments.push(newComment);
    const result = await blog.save();
    return NextResponse.json(result);
  } catch (err) {
    console.error("PUT error:", err);
    return NextResponse.json("Internal Server Error.", { status: 500 });
  }
}
