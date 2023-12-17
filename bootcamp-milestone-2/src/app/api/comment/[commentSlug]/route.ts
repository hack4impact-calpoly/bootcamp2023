import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../helpers/db";
import blogSchema from "../../../../database/blogSchema";
import commentSchema from "../../../../database/commentSchema";


type IParams = {
  params: {
    slug: string;
  };
}

// export async function POST(req: NextApiRequest) {
// 	const body = req.body;
// 	const { BlogSlug } = req.query;// the blog slug from the request params
// 	// validate body
// 	if(req.method != 'POST') {
// 		return NextResponse.json("Method not allowed.", { status: 405 });
// 	}

//   try {
//     const newComment = new Comment({body[comments]});

//   } catch (err) {
//     console.error("Error creating comment:", err);
//     return NextResponse.json("Internal Server Error", { status: 500 });
//   }

//     await connectDB();
	
// 	// push comment object to document
// 	Blog.update(...)
// }

export async function PUT(req: NextRequest, { params }: IParams) {
	await connectDB();
	const { slug } = params;

	try{
		const blog = await blogSchema.findOne({ slug }).orFail();
		const { comment } = await req.json();
		
		blog.comments.push(comment);
		const result = await blog.save();
		return NextResponse.json(result);		
	} catch (err) {
		console.error("PUT error:", err);
		return NextResponse.json("Internal Server Error.", { status: 500 });
	}
}