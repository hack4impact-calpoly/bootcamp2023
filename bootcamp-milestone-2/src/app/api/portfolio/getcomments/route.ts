import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import { IPortfolioSchema } from "../../../../database/portfolioSchema";

/* 
	In order to use params, you need to have a request parameter before

	The reason why we do { params }, is to destructure, the object, meaning,
	it allows us to obtain the individual properties within the "IParams" 
	object directly and conveniently, 
	such as the `params` property.
*/

export async function GET(req: NextRequest) {
  await connectDB(); // function from db.ts before
  try {
    const comments = await IPortfolioSchema.find()
      .select({ comments: 1, _id: 0 }) // Exclude _id, include comments
      .populate("comments") // Populate the comments
      .orFail();

    return NextResponse.json(comments);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
