import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import portfolioSchema from '@/database/portfolioSchema'
import Portfolio from '@/database/portfolioSchema'
import { ObjectId } from 'mongodb'

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const portfolio = await portfolioSchema.findOne({ slug }).orFail()
	        return NextResponse.json(portfolio)
	    } catch (err) {
	        return NextResponse.json('Project not found.', { status: 404 })
	    }
}

export async function POST(req: NextRequest) {
	const body = req.body
	const PortfolioSlug = req.url
	// validate body
	if (!body) {
		return NextResponse.json('Comment does not exist.', {status: 404})
	}
	
	Portfolio.updateOne(
		{
			_id: new ObjectId('655fcb47d5fc316161185eb8')
		}, {
			$push: { "comments": {
				"0": "user500",
				"1": "Nice work with this project",
				"2": "time"
			}

			}
		}
	)
}