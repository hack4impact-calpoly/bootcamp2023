import mongoose, { Schema } from 'mongoose';

type IComment = {
    user: string;
    comment: string;
    time: String;
}
// typescript type (can also be an interface)
type IProject = {
    title: string;
    description: string; // for preview
    image_link: string;
    image_width: string;
    image_height: string;
    project_link: string;
    comments: IComment[]; // array for comments
};


// mongoose schema 
export const projectSchema = new Schema<IProject>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image_link: {type: String, required: true},
    image_width: {type: String, required: true},
    image_height: {type: String, required: true},
    project_link: {type: String, required: false},
    comments: [{
        user: {type: String, required: true},
        comment: {type: String, required: true},
        time: {type: String, required: false}
    }]

}
)

// defining the collection and model
const Project = mongoose.models['projects'] ||
mongoose.model('projects', projectSchema);

export default Project;