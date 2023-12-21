import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/database/db";
import { ProjectComment } from "@/app/database/projectSchema";
import { extractFormData } from "../../utils/extractFormData";

/**
 * Retrieves all project comments from the database.
 * @param req - The NextRequest object.
 * @returns A JSON response containing the project comments.
 */
export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const projectComments = await ProjectComment.find({});
    return NextResponse.json(projectComments);
  } catch (err) {
    return NextResponse.json("Failed to retrieve projects.", { status: 404 });
  }
}
/**
 * Handles the POST request to create a new comment.
 * @param req - The NextRequest object containing the request data.
 * @returns A NextResponse object with the created comment or an error message.
 */
export async function POST(req: NextRequest) {
    await connectDB();
    try {
        const comment = extractFormData(await req.formData());

        if (!comment) {
            return NextResponse.json("Invalid form data.", { status: 400 });
        }

        const newComment = new ProjectComment(comment);
        await newComment.save();

        const projects = await ProjectComment.find({});
        return NextResponse.json(projects);
    } catch (err) {
        return NextResponse.json("Failed to create comment.", { status: 500 });
    }
}
