import mongoose, { Schema } from "mongoose";


// typescript type (can also be an interface)
export type IProj = {

        title: string;
        description: string;
        link: string;
        image: string;

    
};




// mongoose schema 
const projectSchema = new Schema<IProj>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
    link: { type: String, required: false },
})



// defining the collection and model
const Project = mongoose.models['Projects'] || mongoose.model('Projects', projectSchema);

export default Project;
