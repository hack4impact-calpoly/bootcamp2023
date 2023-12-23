import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import portfolioSchema from "@/database/portfolioSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  const comment = await req.json();
  // validate body
  if (!comment) {
    return NextResponse.json("No body provided.", { status: 400 });
  }
  const PortfolioSlug = { slug: params.slug };

  // push comment object to document
  try {
    await connectDB();
    const project = await portfolioSchema.findOneAndUpdate(PortfolioSlug, {
      $push: {
        comments: comment,
      },
    });
    return NextResponse.json(project);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
