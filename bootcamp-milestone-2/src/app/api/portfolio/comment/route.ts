import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../database/db";
import { ProjectComment } from "../../../database/projectSchema";
import { IComment } from "../../../database/commentSchema";

type IParams = {
  params: {
    slug: string;
  };
};

const extractFormData = (formData: FormData): IComment | null => {
  if (!formData || !formData.has("user") || !formData.has("comment")) {
    return null;
  }

  const object = Object.fromEntries(Array.from(formData.entries()));

  return {
    user: object.user.toString(),
    comment: object.comment.toString(),
    time: new Date(),
  };
};

// api/portfolio/comments/route.ts
export async function GET(req: NextRequest) {
  await connectDB();
  try {
    console.log("Fetching comments...");
    const comments = await ProjectComment.find({});
    console.log("Fetched comments:", comments);
    return NextResponse.json(comments);
  } catch (err) {
    console.error("Error fetching comments:", err);
    return NextResponse.json("Failed to fetch comments.", { status: 404 });
  }
}


export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const comment = extractFormData(await req.formData());

    if (!comment) {
      return NextResponse.json("Invalid form data.", { status: 400 });
    }

    const newComment = new ProjectComment(comment);
    await newComment.save();

    const projects = await ProjectComment.find({});
    return NextResponse.json(projects);
  } catch (err) {
    console.error("Error creating comment:", err);
    return NextResponse.json("Failed to create comment.", { status: 500 });
  }
}
