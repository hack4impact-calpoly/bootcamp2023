import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@utils/database"
import Blogs from "@models/blogSchema";

type IParams = {
		params: {
			slug: string
		}
}

export async function POST(req: NextRequest, { params }: IParams) {
    const body = await req.json();
    const { slug } = params;

    try {
        await connectDB();
        const blog = await Blogs.findOneAndUpdate({ slug }, {$addToSet: {test_arr: "b"}})
        return NextResponse.json(blog);
    } catch (err) {
        return NextResponse.json("Blog not found.", { status: 404 });
    }
}
