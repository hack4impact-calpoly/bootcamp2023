import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure
  console.log(slug)
  try {
    const project = await Project.findOne({ slug }).orFail();
    console.log("project", project)
    return NextResponse.json(project);
    //return NextResponse.html(blogDetailComponent)
    //return NextResponse.html(<BlogDetail blog = {blog} />);
  } catch (err) {
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}

