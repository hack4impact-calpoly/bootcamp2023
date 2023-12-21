import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../database/db";
import {Project} from "@/app/database/projectSchema";

/**
 * Retrieves all projects from the database.
 * @param req - The NextRequest object.
 * @returns A JSON response containing the projects, or an error response if retrieval fails.
 */
export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const projects = await Project.find({});
    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json("Failed to retrieve projects.", { status: 404 });
  }
}
