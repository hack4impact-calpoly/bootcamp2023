import Image from 'next/image';
import style from "../../page.module.css"
import Comment from '@components/comment';

type IParams = {
  params: {
      slug: string
  }
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


export default async function Blog({ params }: IParams) {
    const slug = params.slug;
    const blog = await getBlog(slug);

    if (!blog) {
      return (
        <main>
          <p>Blog not found.</p>
        </main>
      );
    } else {
      return (
        <main>
          <div>
            <div className={style.title}>{blog.title}</div>
            <div className={style.blog}>
              <Image src={blog.image} alt="" height={300} width={250}></Image>
              <p className={style.content}>{blog.content}</p>
            </div>
          </div>
          <div className={style.comments}>
            <h2 className={style.cTitle}>Comment(s)</h2>
            {blog.comments.map((comment: any, index: React.Key | null | undefined ) => (
                      <Comment key={index} comment={comment} />
              ))}
          </div>
        </main>
      );
    }
  }
