import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  console.log("called");

  try {
    const body = await req.json();
    if (!body || !body.user || !body.comment) {
      return NextResponse.json("Invalid request body", { status: 400 });
    }

    const { slug } = params;
    const { user, comment } = body;

    await connectDB();

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: slug },
      { $push: { comments: { user, comment } } },
      { new: true }
    ).orFail();

    return NextResponse.json(updatedBlog);
  } catch (err: any) {
    if (err.name === "DocumentNotFoundError") {
      return NextResponse.json("Blog not found.", { status: 404 });
    } else {
      console.error("Error:", err);
      return NextResponse.json("Internal Server Error", { status: 500 });
    }
  }
}
