import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.

	If we didn't do this, to obtain slug would look messy,
	ex.
	const slug = params.params.slug

	There are more ways to destructure this, but that is up to you to find out
	lol.

 */
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();
  let passedValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passedValue);
  const { slug } = params;
  if (!bodyreq) {
    return new Response("Invalid request body", { status: 400 });
  }
  try {
    await Blog.findOneAndUpdate(
      { slug: slug },
      { $push: { comments: bodyreq } }
    );
  } catch (error) {
    console.log(error);
  }
  return new Response("Invalid request body", { status: 200 });
}
