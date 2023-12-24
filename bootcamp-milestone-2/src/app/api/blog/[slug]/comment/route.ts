import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/helpers/db";
import Blog, { IBlog } from '@/database/blogSchema';

export type IParams = {
  slug: string;
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    //return new NextResponse({ status: 405, body: { error: 'Method Not Allowed' } });
  }

  await connectDB();

  // Extract the data from the request body
  const { username, commentText, blogSlug } = await req.json();

  try {
    console.log("hello")
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug: blogSlug },
      {
        $push: {
          comments: {
            user: username,
            comment: commentText,
            time: new Date(),
          },
        },
      },
      { new: true } 
    );
    console.log("hello")
    console.log(updatedBlog)

    if (!updatedBlog) {
      //return new NextResponse({ status: 404, body: { error: 'Blog not found' } });
    }

    return NextResponse.json({body:'successful'})
  } catch (error) {
    console.error('Error posting comment:', error);
    //return new NextResponse({ status: 500, body: { error: 'Internal Server Error' } });
  }
}
