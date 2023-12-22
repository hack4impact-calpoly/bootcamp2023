import { NextRequest, NextResponse } from "next/server";
import blogSchema from "../../../database/blogSchema";
import connectDB from "../../../helpers/db";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  const request = await req.json(); //convert request to json

  //how to check request body??
  if (request == null) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  if (request !== null) {
    //extract comment params from request
    const comment = request.comment;
    const user = request.user;
    const time = request.time;

    const { slug } = params; // destructure for easier access

    try {
      await connectDB(); // connects to DB

      //finds the blog with 'slug', pushes comment obj, returns entire blog entry
      const result = await blogSchema.findOneAndUpdate(
        { slug: slug }, //allows the specific blog entry to be updated
        {
          $push: {
            comments: { user, comment, time }, //pushes the following object to 'comments' array
          },
        },
        { new: true } //returns the entry after it has been updated (as opposed to before the update)
      );

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
