import styles from "./page.module.css";
import BlogPreview from "@/components/blogPreview";
import getBlogs from "../blogData";
/*
const handleClick = () => {

}*/

export default async function Home() {
  const blogPosts = await getBlogs();

  if (blogPosts) {
    return (
      <main className={styles.main}>
        <div className="blog_container">
          {blogPosts.map((blog) => (
            /* we will soon add RecipePreview here */
            <div key={blog._id}>
              <BlogPreview {...blog._doc} />
            </div>
          ))}
        </div>
        <img
          className="flower"
          src="flowers.JPG"
          alt="flowers"
          width="650"
          height="1000"
        />
      </main>
    );
  }
}
