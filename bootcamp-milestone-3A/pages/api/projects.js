import connectDB from "@/helpers/db";
import Project from "@/database/projectSchema";

export default async function GET(request, res) {
  await connectDB();
  try {
    const projects = await Project.find().sort({ date: -1 }).orFail();
    console.log("All Projects:", projects);
    res.status(200).json({ projects });;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}
