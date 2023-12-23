import connectDB from "@/helpers/db";
import { NextRequest, NextResponse } from "next/server";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  const body = await req.json(); //maybe need to update
  const username = body.user;
  const commentContent = body.comment;
  const givenTime = body.time; 

  // validate body
  if (body === null) {
    return NextResponse.json("Received comment is not valid");
  }

  try {
    const blog = await Blog.findOne({ slug: slug }).orFail();
    blog.comments.push({ user: username, comment: commentContent, time: new Date().toISOString()});
    await blog.save();
    return NextResponse.json("Comment successfully added");

  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog Error");
  }
}
