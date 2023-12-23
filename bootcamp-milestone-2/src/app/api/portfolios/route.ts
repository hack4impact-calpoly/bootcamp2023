import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import portfolioSchema from "../../../database/portfolioSchema";

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.
*/

export async function GET() {
  await connectDB(); // function from db.ts before
  try {
    const portfolio = await portfolioSchema.find().orFail();
    return NextResponse.json(portfolio);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Portfolio not found." },
      { status: 404 }
    );
  }
}
