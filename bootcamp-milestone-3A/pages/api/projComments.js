import connectDB from "@/helpers/db";
import projComment from "@/database/projectCommentSchema";

export default async function GET(request, res) {
  await connectDB();
  try {
    const projects = await projComment.find().orFail();
    console.log("All Projects:", projects);
    res.status(200).json({ projects });;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}