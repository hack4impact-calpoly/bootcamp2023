import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type IPort = {
    title: string;
    date: Date;
    description: string[]; // for preview
    intro: string;
    // for individual blog page
    //comments: Comment[]; // array for comments
};


// mongoose schema 
const portSchema = new Schema<IPort>({
    title: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: [String], required: true },
    intro: { type: String, required: true}
    //content: { type: String, required: true },
});

// defining the collection and model
const Port = mongoose.models['portfolio'] ||
mongoose.model('portfolio', portSchema);

export default Port;