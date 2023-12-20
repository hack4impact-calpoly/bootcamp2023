import mongoose from "mongoose";

// Define the Project schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// Define the model or use the existing one if it has already been defined
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
