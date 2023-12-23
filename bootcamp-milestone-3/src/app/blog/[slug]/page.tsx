import BlogPage from '../../../components/recipeBlogPage';
import Comment from '../../../components/comment';

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
	try {
		console.log(slug);
		const res = await fetch(`http://localhost:3000/api/${slug}`, {
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
	
    if (blog){
	    return (
	        <div>
                <BlogPage blog= { blog }/>
	            {blog.comments.map((comment: any) => (
	                <Comment comment={comment} />
	            ))}
	        </div>
	    );
	}
}