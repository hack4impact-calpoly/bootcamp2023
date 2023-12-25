import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/helpers/db";
import Blog, { IBlog } from '@/database/blogSchema';
import style from '../../../home.module.css';


export type IParams = {
    params: {
        slug: string;
    };
};

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB();
	
    const { slug } = params;

    try {
        const blog: IBlog | null = await Blog.findOne({ slug }).orFail();

        if (!blog) {
            return NextResponse.json({
                "A":"B"
            })
            throw new Error('Blog not found.');
        }

		return NextResponse.json(blog)

    } catch (err: any) {
        return new NextResponse(err.message, { status: 404 });
    }
}

/*
        const { title, content, date, description, image, comments } = blog;

        // Check if 'comments' is an array, otherwise use an empty array
        const commentsArray = Array.isArray(comments) ? comments : [];

        // Create an HTML template
		
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
            </head>
            <body>
			<div className="${style.about}">
				<div className="${style.aboutimage}">
                	<h1>${title}</h1>
				</div>
                <p>${description}</p>
                <img src="${image}" alt="${title}">
                <p>${content}</p>
                <p>Date: ${new Date(date).toLocaleDateString()}</p>
                <h2>Comments</h2>
                <ul>
                    ${commentsArray.map(comment => `
                        <li>
                            <strong>${comment.user}</strong>: ${comment.comment} (${new Date(comment.time).toLocaleString()})
                        </li>
                    `).join('')}
                </ul>
			</div>
            </body>
			<div className="${style.footer}">
        		<footer>© 2023 My Personal Website | All Rights Reserved | Made with love ♥</footer>
    		</div>
            </html>
        `;

		

        // Use NextResponse constructor
        return new NextResponse(html, {
            headers: {
                'Content-Type': 'text/html',
            },
        });

		*/
   
