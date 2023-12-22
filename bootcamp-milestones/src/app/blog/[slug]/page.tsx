
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
		// console.log(`error: ${err}`);
		return null;
	}
}

export default async function Blog({ params : {slug} }: Props) {
	// now we can access slug
    // slug = params.slug;
	const blog = await getBlog(slug);
    if (blog) {
        return (
            <>
                <h1>{blog.title}</h1>
                {/* <p>{blog.date}</p> */}
                <p>{blog.content}</p>
            </>
        );
    }
     
    else {
        return (
            <h1> 404 Blog NOT FOUND </h1>
        );
    }
}