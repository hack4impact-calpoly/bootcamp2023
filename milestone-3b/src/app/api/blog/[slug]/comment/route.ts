import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Blogs from "@/database/blogSchema";

type IParams = {
    params: {
        slug: string;
    };
};

export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;
    try {
        const blog = await Blogs.findOne({ _id: slug }).orFail();
        if (req.body) {
            await Blogs.updateOne({ slug }, { $push: { comments: req.body }});
            return NextResponse.json("Success: Comment Added");
        } 
        else {
            return NextResponse.json("Failed: Comment Not Added");
        }
    } catch (err) {
        return NextResponse.json("Failed: Comment Not Added");
    }
}