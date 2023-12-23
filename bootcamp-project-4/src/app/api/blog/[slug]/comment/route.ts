import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../helpers/db";
import blogSchema from "../../../../database/blogSchema";
import { IComment } from "@/app/database/commentSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;
  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    const { user, comment, date }: IComment = await req.json();

    try {
      await blogSchema.updateOne(
        { slug },
        {
          $push: {
            comments: {
              user,
              comment,
              date,
            },
          },
        }
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json("Blog not found.", { status: 404 });
    }
    await blog.save();
    return NextResponse.json("Comment added.", { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog not added.", { status: 400 });
  }
}
