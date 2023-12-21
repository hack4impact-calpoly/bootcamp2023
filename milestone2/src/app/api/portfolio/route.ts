import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Portfolio from "@/database/portfolioSchema";

export async function GET(req: NextRequest) {
  await connectDB(); // function from db.ts before

  try {
    const port = await Portfolio.find().orFail();
    return NextResponse.json(port);
  } catch (err) {
    console.log("cracked");
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}

export async function POST(req: NextRequest) {
  await connectDB();
  let passedValue = await new Response(req.body).text();
  let bodyreq = JSON.parse(passedValue);
  if (!bodyreq) {
    return new Response("Invalid request body", { status: 400 });
  }
  try {
    await Portfolio.findOneAndUpdate({
      content: "Hack4Impact Portfolio",
      $push: { comments: bodyreq },
    });
  } catch (error) {
    console.log(error);
  }
  return new Response("Invalid request body", { status: 200 });
}
