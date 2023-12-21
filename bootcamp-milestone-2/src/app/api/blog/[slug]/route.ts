import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../database/db";
import blogSchema from "../../../database/blogSchema";
import Comments, {IComment} from "../../../database/commentSchema";

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

  // export async function POST(req: NextRequest) {
  //   const body = req.body
  //   const BlogSlug = req.params.bodySlug;
  //   // validate body
  //   if (BodySlug==null) {
  //     return NextResponse.json("Blog not found.", {status: 501})
  //   }
    
  //   // push comment object to document
  //   Blog.update(...)
  // }