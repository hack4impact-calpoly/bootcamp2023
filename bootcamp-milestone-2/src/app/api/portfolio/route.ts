import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../database/db";
import { Project } from "../../database/projectSchema";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    console.log("Fetching projects...");
    const projects = await Project.find({});
    console.log("Fetched projects:", projects);
    return NextResponse.json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json("Failed to fetch projects.", { status: 404 });
  }
}

