import { Portfolio } from "@/app/typings/portfolio";
import mongoose, { Schema } from "mongoose";
import { minify } from "next/dist/build/swc";

const portfolioSchema = new Schema<Portfolio>(
    {    
        title: {type: String, required: true},
        description: {type: String, required: true},
        slug: {type: String, required: true},
        picSlug: {type: String, required: true},
        picDescription: {type: String, required: true},
        picWidth: {type: String, required: true},
        picHeight: {type: String, required: true}
    }
)

export default mongoose.models['portfolio-entries'] ||
    mongoose.model('portfolio-entries', portfolioSchema)