import React from 'react';

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function Blog({ params }: Props) {
	const slug = params.slug;
	const blog = await getBlog(slug);

    if (blog) {
        return(
            <h1>Hello</h1>
        )
    }
	else {
        return(
            <h1>{slug}</h1>
        )
    }
}