import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import blogSchema, { IComment } from "@/app/database/blogSchema";
import { extractFormData } from "../../../utils/extractFormData";

type IParams = {
  params: {
    slug: string;
  };
};

/**
 * Handles the POST request to add a comment to a blog.
 *
 * @param req - The NextRequest object representing the incoming request.
 * @param params - The IParams object containing the route parameters.
 * @returns A NextResponse object with the updated blog and a status code.
 */
export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    const formData = await req.formData();

    const comment: IComment | null = extractFormData(formData);
    if (!comment) {
      return NextResponse.json("Invalid form data.", { status: 400 });
    }

    blog.comments.push(comment);
    await blog.save();

    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
