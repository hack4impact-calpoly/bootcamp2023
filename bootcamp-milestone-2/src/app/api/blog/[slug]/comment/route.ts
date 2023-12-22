import { NextRequest, NextResponse } from "next/server";
import blogSchema from "../../../../../database/blogSchema";
import connectDB from "../../../../../helpers/db";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  const request = await req.json(); // Extract the request body

  //how to check request body??
  if (request == null) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  if (request !== null) {
    const comment = request.comment;
    const user = request.user;
    const time = request.time;

    const { slug } = params; // another destructure

    try {
      await connectDB(); // connects to DB
      const result = await blogSchema.findOneAndUpdate(
        //adds the comment to the specified entry
        { slug: slug },
        {
          $push: {
            comments: { user, comment, time },
          },
        },
        { new: true }
      );

      console.log("request: ", request);
      console.log("user: ", request.user);
      console.log("time: ", request.time);
      console.log("comment: ", request.comment);

      console.log("Success: ", result);

      return NextResponse.json(result);
    } catch (error) {
      console.error("Error updating blog:", error);
      return NextResponse.json(
        { error: "Failed to update blog" },
        { status: 500 }
      );
    }
  }
}
