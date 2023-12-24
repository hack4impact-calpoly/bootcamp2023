import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/helpers/db";
import Portfolio, { IPortfolio } from '@/database/portfolioSchema';

export type IParams = {
  slug: string;
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest) {

  await connectDB();

  // Extract the data from the request body
  const { username, commentText, portfolioSlug } = await req.json();

  try {
    console.log("hello")
    console.log(username, commentText, portfolioSlug)
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { slug: portfolioSlug },
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
    console.log(updatedPortfolio)

    if (!updatedPortfolio) {
        console.log("did not update")
      //return new NextResponse({ status: 404, body: { error: 'Blog not found' } });
    }
    return NextResponse.json({body:'successful'})

  } catch (error) {
    console.error('Error posting comment:', error);
    //return new NextResponse({ status: 500, body: { error: 'Internal Server Error' } });
  }
}
