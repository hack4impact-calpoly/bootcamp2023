import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  const comment = await req.json();
  // validate body
  if (!comment) {
    return NextResponse.json("No body provided.", { status: 400 });
  }
  const BlogSlug = { slug: params.slug };

  // push comment object to document
  try {
    await connectDB();
    const blog = await blogSchema.findOneAndUpdate(BlogSlug, {
      $push: {
        comments: comment,
      },
    });
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
