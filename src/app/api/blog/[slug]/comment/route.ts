import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Blogs, { IComment } from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const { user, comment, date }: IComment = await req.json();

    if (!user || !comment || !date) {
      return NextResponse.json("Failed: Invalid Comment", { status: 400 });
    }

    // Make sure the slug is unique for each blog post
    const blog = await Blogs.findOneAndUpdate(
      { slug: slug },
      {
        $push: {
          comments: { user: user, comment: comment, time: date },
        },
      }
    );

    if (!blog) {
      return NextResponse.json("Failed: Blog not found", { status: 404 });
    }

    console.log("Success: Comment Added to Blog with Slug", slug);
    return NextResponse.json("Success: Comment Added", { status: 200 });
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json("Failed: Comment Not Added", { status: 400 });
  }
}
