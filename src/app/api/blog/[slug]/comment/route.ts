import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../database/db";
import { IComment } from "../../../../database/commentSchema";
import Blog from "../../../../database/blogSchema";

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

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;

  try {
    const blog = await Blog.findOne({ slug }).orFail();
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