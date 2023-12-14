import mongoose, { Schema } from "mongoose";
// typescript type (can also be an interface)
type IBlog = {
  title: string;
  slug: string; 
  date: string;
  description: string; // for preview
  comments: Comment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String},
    description: { type: String, required: true },
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
  mongoose.model('blogs', blogSchema);

export default Blog;