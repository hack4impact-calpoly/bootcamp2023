import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Projects, {IComment} from "@/database/projectSchema";

type IParams = {
    params: {
        slug: string;
    };
};


export async function POST(req: NextRequest, { params }: IParams) {
    await connectDB();
    const { slug } = params;
    try {
        const { user, comment, time }: IComment = await req.json()
        if (!user || !comment || !time) {
            return NextResponse.json("Failed: Invalid Comment", { status: 400 });
        }
        const project = await Projects.findOneAndUpdate({slug: slug}, {$push: {comments: {user: user, comment: comment, time: time}}});
        console.log("Success: Comment Added")
        await project.save();
        return NextResponse.json("Success: Comment Added", { status: 200 });
    } 

    catch (err) {
        return NextResponse.json("Failed: Comment Not Added", { status: 400 });
    }
}