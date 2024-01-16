import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import portfolioSchema from "@/database/projectSchema";

type IParams = {
  params: {
       slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params;
  try {
    const projs = await portfolioSchema.findOne({slug : slug}).orFail();
    return NextResponse.json(projs);
  } catch (err) {
    return NextResponse.json("No Projects Found.", { status: 404 });
  }
}