import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../helpers/db";
import blogSchema, { IComment } from "../../../../database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  console.log("in POST");

  await connectDB();
  const { slug } = params;

  try {
    //get blog with specified id
    const blog = await blogSchema.findOne({ slug }).orFail();

    //parse request body into new comment
    // const { user, comment, time }: IComment = await req.json();

    //add new comment to blog
    try {
      // gets data pushed by handle submit
      const body = await req.json();
      console.log(body.user);
      console.log(body.comment);
      console.log(body.time);

      //pushes to database
      blog.comments.push(body);

      //error checking
      console.log(body);
      // await blogSchema.updateOne(
      //   { slug },
      //   { $push: { comments: { user, comment, time } } }
      // );
    } catch (err) {
      console.log(err);
      return NextResponse.json("Could not push newComment", { status: 400 });
    }

    await blog.save();

    return NextResponse.json("Comment added successfully", { status: 200 });
  } catch (err) {
    return NextResponse.json("Comment not added.", { status: 400 });
  }
}
