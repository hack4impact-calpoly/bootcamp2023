type Props = {
    params: {slug: string}
}

export default async function Blog({ params: {slug} }: Props) {
    const blog = await getBlog(slug);

    return 
}

async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/{slug}`, {
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
