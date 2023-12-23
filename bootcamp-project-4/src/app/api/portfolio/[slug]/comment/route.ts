import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../helpers/db";
import projectSchema from "../../../../database/projectSchema";
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
    const proj = await projectSchema.findOne({ slug }).orFail();
    const { user, comment, date }: IComment = await req.json();

    try {
      await projectSchema.updateOne(
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
      return NextResponse.json("Project not found.", { status: 404 });
    }
    await proj.save();
    return NextResponse.json("Comment added.", { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json("Comment not added.", { status: 400 });
  }
}
