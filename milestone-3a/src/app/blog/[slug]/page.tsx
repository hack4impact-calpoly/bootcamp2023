import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import farq from "../../../../public/blog/farquaad.png";
import huh from "../../../../public/blog/huh.png";
import barry from "../../../../public/blog/barry.png"

import EndFiller from "../../../comps/endFiller";

import styles from "../page.module.css";

import connectDB from "../../../helpers/db";
import blogSchema from "../../../database/blogSchema";


async function getBlogs(slug: string){
	await connectDB()

	try {
      const blog = await blogSchema.findOne({ slug }).orFail()
	    return blog
	} catch (err) {
      console.error("Error Getting Data From DB: ", err);
	    return null
	}
}


  

async function BlogPost ({ params }: { params: { slug: string } }) {
  const blogPost = await getBlogs(params.slug);

  if (!blogPost) {
    return <p>blog post not found</p>;
  }

  let image = farq;
  if (blogPost.image == "huh") {
    image = huh;
  }
  if (blogPost.image == "barry") {
    image = barry;
  }
  let dateString = String(blogPost.date)
  //dateString.split()

  return (
    <div className={styles.blog}>
      <div className={styles.blogInnerContainer}>
        <h4>
          <Link href="/blog">Click To Go Back To Blog</Link>
        </h4>
        <div className={styles.blogPosts} id="blog-posts">
          <div className={styles.blogPostNoClick}>
            <div className={styles.blogPostTitleDate}>
              <h2 className="blogPostTitle">{blogPost.title}</h2>
              <p className="blogPostDate">{dateString}</p>
            </div>
            <p className="blogPostMessage">{blogPost.description}</p>
            <Image
                className={styles.aboutImage}
                src={image}
                alt="My Headshot"
                width={300}
                height={300}
              />
          </div>
        </div>
      </div>
      <EndFiller />
    </div>
  );
};

export default BlogPost;

/*

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blogPost = blogData.find((post) => post.slug === slug);

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.date}</p>
      <p>{blogPost.message}</p>
    </div>
  );
};

*/
