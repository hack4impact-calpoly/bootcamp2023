import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema from "@/database/blogSchema";

type Params = {
    params: {
      slug: string;
    };
  };

  export async function GET(req: NextRequest, { params }: Params) {
    await connectDB();
    const { slug } = params; 

    try {
      const blog = await blogSchema.findOne({ slug:slug }).orFail();
      return NextResponse.json(blog);
    } catch (err) {
      return NextResponse.json("Blog not found.", { status: 501 });
    }
  }