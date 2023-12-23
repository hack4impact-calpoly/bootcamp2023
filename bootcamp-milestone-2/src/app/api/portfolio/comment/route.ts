import connectDB from "@/helpers/db";
import { NextRequest, NextResponse } from "next/server";
import { commentSchema } from "@/database/blogSchema";
import mongoose from "mongoose";

const Comments = mongoose.models["comments"] || mongoose.model("comments", commentSchema);

export async function POST(req: NextRequest) {
  console.log("Received")
  await connectDB();

  const body = await req.json(); //maybe need to updatex
  const username = body.user;
  const commentContent = body.comment;
  const givenTime = body.time; 

  // validate body
  if (body === null || username == null || givenTime == null) {
    return NextResponse.json("Received comment is not valid");
  }

  try {

    const newComment = new Comments({user: username, comment: commentContent, time: new Date().toISOString()})
    await newComment.save();
    return NextResponse.json("Comment successfully added");

  } catch (err) {
    console.log(err);
    return NextResponse.json("Comment Error");
  }
  
}


export async function GET(req: NextRequest) {
  await connectDB() // function from db.ts before

   try {
    const allComments = await Comments.find({});
    return NextResponse.json(allComments)

    } catch (err) {
        return NextResponse.json('No Comments not found.', { status: 404 })
    }
}