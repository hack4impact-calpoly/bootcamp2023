import mongoose, { Schema } from "mongoose";
// typescript type (can also be an interface)
type IBlog = {
  title: string;
  slug: string; 
  date: string;
  description: string; // for preview
  content: string
  comments: IComment[]; // array for comments
  image: string
};
type IComment = {
  user: string;
  comment: string;
  time: Date;
}
// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String},
    description: { type: String, required: true },
    content: {type: String, required: true},
    image: {type: String, required: true},
    comments: {},
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
  mongoose.model('blogs', blogSchema);

export default Blog;