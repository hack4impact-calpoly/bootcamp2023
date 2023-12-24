import connectDB from "@/helpers/db";
import { NextRequest, NextResponse } from "next/server";
import Blog from '@/database/blogSchema'

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: Params) {
  await connectDB();
  const { slug } = params;
  try {
    const blog = await Blog.findOne({ slug:slug }).orFail();
    console.log("Found blog:", blog);
    return NextResponse.json(blog);
  } catch (err: any) {
    console.error("Error", err);

    if (err.name === "DocumentNotFoundError") {
      return NextResponse.json(
        { err: "Blog not found", slug },
        { status: 404 }
      );
    }
    return NextResponse.json({ err: "Internal Server Error" }, { status: 500 });
  }
}